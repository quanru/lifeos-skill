# LLM Wiki / AI Wiki `.AI.md` pages

Load this reference when the user asks to regenerate, organize, validate, audit,
or clean up LLM Wiki / AI Wiki / `.AI.md` pages in a LifeOS vault.

## Concept

An `.AI.md` page is a derived, AI-readable companion to a LifeOS theme/index note.
It summarizes durable knowledge for agents. The human-authored theme note remains
the source of truth.

Use `.AI.md` for topic-level notes only:

- project / 项目
- area / 领域
- resource / 资源
- archive / 归档, when it still has a topic/index note
- generic theme / 主题
- section-level PARA overview notes, only if the vault already uses them

Do not create `.AI.md` for ordinary source materials, capture notes, daily /
weekly / monthly notes, meeting notes, imported articles, raw excerpts, or
one-off documents. If a source note contains durable knowledge, attach it to an
existing theme and update that theme's `.AI.md`.

## First moves

1. Run `npx -y @life-os/cli config --json` to identify the vault root and the
   user's real PARA folder names.
2. Resolve the requested scope before editing:
   - one named project / area / resource / theme: use `search query=<name>` and
     `read path=<path>` to locate the exact theme/index note; ask if ambiguous.
   - all projects / areas / resources / archives: enumerate direct child folders
     under the configured PARA root and include folders with a topic/index note.
   - whole LLM Wiki: combine the topic/index notes from all PARA roots.
3. For each target, read the theme/index note, direct child Markdown materials,
   and any existing same-basename `.AI.md`.
4. Read the AI Wiki index and changelog if the vault already has them. Do not
   invent a global index unless the user asks for one or the vault already uses
   that convention.

Common source note names include `<folder>/<folder>.md`, `<folder>/README.md`,
or `<folder>/<folder>.README.md`, depending on the vault template. Put the
companion `.AI.md` next to the source note with the same basename, such as
`<folder>/<folder>.AI.md` or `<folder>/README.AI.md`.

## Page policy

- Use uppercase `.AI.md`; treat lowercase `.ai.md` as a cleanup issue unless the
  vault explicitly uses lowercase.
- Preserve existing frontmatter keys when updating an existing `.AI.md`; otherwise
  use the vault's established AI Wiki convention.
- If no convention exists, default to:

```markdown
---
type: wiki/主题
source: "[[主题索引笔记]]"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

- Keep source links stable. `source` should point to the human-authored
  theme/index note, not to a child material.
- The `.AI.md` should synthesize durable knowledge. It should not be a pure file
  list, changelog, or transcript.
- If the material is thin, say so in `维护备注` / maintenance notes instead of
  inventing detail.

## Regeneration workflow

For each target:

1. Read the theme/index note and identify its theme tag, status, purpose, and
   current work context.
2. Read direct child Markdown materials that belong to that topic. Prefer direct
   children; avoid recursively absorbing unrelated archives unless the topic
   note explicitly links to them.
3. Rewrite the companion `.AI.md` in the vault's language and naming style.
4. Include at least:
   - one-sentence summary
   - topic positioning
   - core judgments / stable facts
   - material map
   - usage scenarios
   - next ingestion priorities
   - maintenance notes
5. Update `updated:`. Keep `created:` if present.
6. Update the AI Wiki index and changelog when they exist.
7. Run `git diff --check` scoped to changed files when the vault is under Git.

## Cleanup and validation

When the user asks to organize, validate, audit, or clean up `.AI.md` pages,
review:

- lowercase `.ai.md`
- `.AI.md` pages attached to non-topic notes
- missing or invalid frontmatter
- missing or stale `source`
- `.AI.md` pages missing from an existing AI Wiki index
- AI Wiki index entries pointing to deleted `.AI.md` pages

Use `rg --files -g '*.AI.md' -g '*.ai.md'` for discovery, then inspect only the
candidate files needed for the request.

When deleting an invalid `.AI.md`, also remove it from the AI Wiki index and
avoid leaving Obsidian links to the deleted page.

## Safety

- Never write from a loose name. Resolve the exact path first.
- Preserve user changes outside the requested LLM Wiki scope.
- Stage only files that belong to the requested LLM Wiki operation.
- If multiple theme notes match a requested name, ask the user to choose.
