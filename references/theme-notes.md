# Theme notes and tag wiring

Use this reference when creating or maintaining a project, area, resource,
archive or another subject-based LifeOS workspace.

## Theme model

A theme note is the durable subject workspace. PARA is the common shape:

- **Project / 项目**: a concrete outcome, normally with a completion condition.
- **Area / 领域**: an ongoing responsibility or standard to maintain.
- **Resource / 资源**: reusable knowledge or material about a topic.
- **Archive / 归档**: inactive work and its reusable conclusions or assets.
- **Theme / 主题**: a generic subject when PARA does not fit.

The theme tag is the subject's unique association key. Tagged tasks, bullets and
files across periodic notes and the vault can be indexed back into the theme.
Folders hold durable medium/long-form material; tags connect short distributed
records.

## Select associations safely

Reuse a theme tag only when the user explicitly selected the association, the
original content already contains it, or a durable user preference authorizes
automatic association. A relevant active note, search hit or unique visible
project is only a candidate.

If a new task or capture could belong to a theme but the association is not
confirmed, complete and verify the requested write without the tag, then ask a
short follow-up. On confirmation, update the same record rather than creating a
duplicate.

Before inventing a new tag, inspect the target theme note and existing tag
vocabulary:

```bash
npx -y @life-os/cli search query="主题名" type=file
npx -y @life-os/cli search query="主题名" type=tag
npx -y @life-os/cli read path="exact/theme/index.md"
```

## Create from the configured template

Resolve the vault with `config` and read the selected template before writing.
Project/theme index notes must retain that template's structure, including its
advanced-list blocks. A title, goal, task list or hand-written README alone is
not a template-created index, even when created for an Agent delegation.

- Resolve the directory from the selected type and the filename from
  `paraIndexFilename` or `themeIndexFilename`: `folderName` means `<name>.md`;
  `readme` accepts `README.md` and `<prefix>.README.md`. Reuse the actual
  existing name; when creating, follow the host/vault naming convention. Check
  existing indexes before choosing a path;
  do not rename an existing entry or create a second index as part of a repair.
- Resolve the template from `projectsTemplateFilePath`, `areasTemplateFilePath`,
  `resourcesTemplateFilePath`, `archivesTemplateFilePath` or
  `themesTemplateFilePath`. If unset, select the type directory's `Template.md`.
  The updated CLI rejects missing explicit templates and propagates read errors;
  an intentionally empty template is used as-is. Only an absent conventional
  directory template uses the built-in default. Compare the returned
  `templatePath` with the selected file. Older installed CLI versions can silently
  fall back even for broken explicit paths, so verify the receipt and saved note
  rather than assuming the installed executable includes this fix.
  The actual template is authoritative; do not assume
  all vaults use the same headings, queries or language.
- Use `theme:create` with an authorized tag to render the template, then append
  the requested goals and working material without replacing the scaffold.
  `type=` accepts `project`, `area`, `resource`, `archive` or `theme`.

For example, only when config selects `1. 项目`, `folderName`, and the tag is
already authorized:

```bash
npx -y @life-os/cli theme:create type=project tag="项目/季度OKR" path="1. 项目/季度OKR/季度OKR.md" --json
npx -y @life-os/cli read path="1. 项目/季度OKR/季度OKR.md" --json
```

The CLI currently requires `tag=`. Do not invent a tag to satisfy this argument.
If no tag is authorized, or this host lacks template creation, use an available
template-rendering path that preserves the scaffold without adding associations.
If that cannot be done, prepare the requested content and report the specific
missing capability or tag decision; do not silently fall back to a plain index
or claim template creation succeeded. Mobile confirmation rules still apply.

## Repair and verify index notes

Read the exact existing index and effective template. For a requested repair,
merge only missing template sections or blocks; preserve frontmatter, content,
links, task states and customized queries. Recognize existing blocks by their
query content, not just heading names. Never append duplicates on a second run,
replace the entire note with the template, or copy sample tasks and relative
sample deadlines into an existing project. Ordinary project edits must preserve
its existing list blocks. Do not apply this scaffold to every document in a
project folder or to tutorial/demo vaults outside the requested scope.

After creation, repair or an index rewrite, read the saved file and verify:

- The path and index filename match the selected vault and configuration, or
  the existing entry being repaired.
- Every advanced-list block in the effective template is present with intact
  fences and query settings. Expected creation variables must be rendered;
  preserve intentional runtime query syntax and unsupported `{{…}}` expressions
  rather than deleting every remaining brace expression.
  Typical LifeOS templates include `TaskListByTag`, `BulletListByTag` and
  `FileListByTag`, with `ArchiveListByTag` in some area templates. These are
  examples, not blocks to force into a custom template that omits them.
- Compare parsed template frontmatter with the result, including YAML block-list
  tags/aliases and nested or multiline properties. The tag-injection
  helper in older CLI versions can lose structured metadata. The updated helper
  uses YAML document nodes and rejects invalid metadata; still compare template
  fields on readback. If an older host loses fields, use a YAML-aware preserving
  merge rather than repeatedly invoking `theme:create overwrite`.
- Existing content and authorized tags remain intact. Check the association
  required by the actual query; missing tags must not be guessed. Distinguish
  a restored list block from verified results or working cross-note aggregation.

A successful write receipt alone does not establish these postconditions.
Report any unverified rendering or association separately from file repair.

## Choose the related surface

- Maintain the Markdown theme note for source knowledge and working material.
- Generate a sibling `.AI.md` only for a topic/index note; follow
  `../../lifeos-content/references/ai-wiki.md`.
- Generate a sibling `.html` decision surface only when the user requests a
  theme dashboard; follow
  `../../lifeos-content/references/theme-dashboard.md`.
- Route multi-record CRUD, forms, filters or repeated operational workflows to
  Aino App Builder; follow
  `../../lifeos-content/references/aino-mini-apps.md`.

Do not silently convert one surface into another. Preserve the source note and
ask when the requested surface is ambiguous.
