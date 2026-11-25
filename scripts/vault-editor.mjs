import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, realpath, rename, rm, stat, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { isAbsolute, join, parse } from 'node:path';
import { parseArgs } from 'node:util';

async function optional(read) {
  try {
    return await read();
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

async function select() {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: { use: { type: 'string' }, remember: { type: 'boolean' } },
  });
  const editors = ['obsidian', 'aino'];
  if (positionals.length !== 1 || !isAbsolute(positionals[0]) ||
      (values.use !== undefined && !editors.includes(values.use)) || (values.remember && !values.use)) {
    throw new Error('Usage: node vault-editor.mjs <absolute-vault-directory> [--use obsidian|aino [--remember]]');
  }
  const vault = await realpath(positionals[0]);
  if (vault === parse(vault).root || !(await stat(vault)).isDirectory()) {
    throw new Error('Choose an existing vault directory.');
  }
  const config = process.env.XDG_CONFIG_HOME ||
    (process.platform === 'win32' && process.env.APPDATA) || join(homedir(), '.config');
  const directory = join(config, 'lifeos', 'vault-editors');
  const key = createHash('sha256').update(vault).digest('hex');
  const preference = join(directory, key);
  if (values.use) {
    if (values.remember) {
      await mkdir(directory, { recursive: true, mode: 0o700 });
      const temp = join(directory, key + '.' + randomUUID());
      try {
        await writeFile(temp, values.use, { flag: 'wx', mode: 0o600 });
        await rename(temp, preference);
      } finally {
        await rm(temp, { force: true });
      }
    }
    return { vault, editor: values.use, source: 'explicit' };
  }
  const saved = await optional(() => readFile(preference, 'utf8'));
  if (editors.includes(saved)) return { vault, editor: saved, source: 'preference' };

  const marker = async (name) => (await optional(() => stat(join(vault, name))))?.isDirectory() ?? false;
  const [obsidian, aino] = await Promise.all([marker('.obsidian'), marker('.lifeos')]);
  if (obsidian !== aino) return { vault, editor: obsidian ? 'obsidian' : 'aino', source: 'marker' };

  let recommended = null;
  if (obsidian) {
    const list = await optional(() => readFile(join(vault, '.obsidian', 'community-plugins.json'), 'utf8'));
    if (list) {
      try {
        const enabled = JSON.parse(list);
        if (Array.isArray(enabled) && enabled.includes('lifeos-pro')) recommended = 'obsidian';
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
      }
    }
  }
  return { vault, editor: null, source: 'ask', recommended };
}

try {
  console.log(JSON.stringify(await select()));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
