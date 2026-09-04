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

Run `config` first to learn the actual PARA directories. Use `theme:create` so
the selected type's configured template is rendered and its tag is merged into
Frontmatter:

```bash
npx -y @life-os/cli config
npx -y @life-os/cli theme:create type=project tag="项目/季度OKR" path="1. 项目/季度OKR/季度OKR.md"
```

`type=` accepts `project`, `area`, `resource`, `archive` or `theme`. Template
resolution prefers the configured `<type>TemplateFilePath`, then the type
directory's `Template.md`, then the built-in default. The caller supplies the
exact path; the normal convention is `<configuredDir>/<name>/<name>.md`.

Do not pass `overwrite` until the exact existing target has been read and the
replacement is intentional. Preserve unknown Frontmatter and body content when
updating an existing theme.

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
