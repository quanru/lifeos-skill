---
name: lifeos
version: "0.2.0"
display_name: "LifeOS 知识库助手"
display_name_en: "LifeOS Knowledge Base"
description: "Operate, organize, initialize, migrate, and review a LifeOS Markdown knowledge base through the LifeOS CLI or Aino Mobile native tools."
description_zh: "通过 LifeOS CLI 或 Aino Mobile 原生工具读取、整理、搭建、迁移和复盘 LifeOS Markdown 知识库。"
description_en: "Read, organize, initialize, migrate, and review a LifeOS Markdown knowledge base through the LifeOS CLI or Aino Mobile native tools."
---

# LifeOS Core

This flat distribution combines the complete LifeOS Skill bundle in one package.
Apply the shared runtime and safety contract here before using any domain workflow.

## Choose the domain

- Today, tasks, periodic notes, recent work or weekly review: use
  [LifeOS Today](#lifeos-today).
- Workflow/PARA boards, theme notes or flow bottlenecks: use
  [LifeOS Board](#lifeos-board).
- Empty folders, template choice, takeover, classification or migration: use
  [LifeOS Onboarding](#lifeos-onboarding).
- Search, capture, attachment metadata, AI Wiki, HTML dashboards or Aino mini-app
  routing: use [LifeOS Content](#lifeos-content).
- OPC company operations: use the separate `opc` Skill.

For exact flags, result schemas, errors and uncommon commands, read
[`references/commands.md`](references/commands.md).

## Choose the host

For headless or desktop work, invoke:

```bash
npx -y @life-os/cli <command>
```

The first run downloads the published package; `-y` skips the install prompt.
Do not require Aino Desktop or Obsidian to be open.

On **Aino Mobile**, use the native `lifeos_*` tools reported by
`lifeos_get_vault_info`. Never ask a mobile user to install Node.js or run shell
commands. Mobile writes prepare previews only: require explicit confirmation and
a commit receipt before claiming a mutation succeeded. Mobile never exposes
permanent deletion. Onboarding plan/apply are CLI-only.

## Resolve the vault and model

Outside onboarding, run `config` before a workflow whose real folders, periodic
formats or templates matter. Run `profile` when the operating model is not
already known.

```bash
npx -y @life-os/cli config --json
npx -y @life-os/cli profile --json
```

Vault resolution order is explicit `vault=` -> `$LIFEOS_VAULT` -> walk upward
for `.obsidian/`, `.lifeos/` or `.agents/skills/lifeos/` -> Aino's last-opened
folder. Pass `vault=` when the intended vault differs from the current context.
Never construct PARA folders, periodic paths, formats or section headers from
memory; use resolved configuration.

Options use `key=value`; flags use `--json` or a bare word such as `overwrite`.
Quote values containing spaces and request `--json` for machine-readable work.

## Read and target precisely

- Read existing content before changing it. Use the exact vault-relative `path=`
  or task `ref=` returned by a query; never write through a guessed loose name.
- Preserve unknown Frontmatter and body content. Use `overwrite` only after
  intentionally rebuilding the complete target.
- Keep writes inside the selected vault. Surface unexpected path resolution
  instead of creating a stray note.
- Treat an echoed resolved path, structured result or mobile commit receipt as
  evidence of a completed write. A click, preview or proposed tool call is not
  completion evidence.
- Never claim to understand a binary attachment unless another tool extracted
  its content. Inventory visibility alone is not content parsing.

## Confirm associations and consequential writes

Project/theme tags are optional, user-owned associations. Add one only when the
user explicitly names it, the source already carries it, or a durable preference
authorizes automatic association.

If a tag only looks relevant, complete the requested task without that inferred
tag, then ask whether to add it. If confirmed, update the exact item just
created; never create a duplicate.

Preview and obtain explicit confirmation before onboarding apply, migration,
classification apply, file moves, recoverable deletion, or a broad overwrite.
Do not silently broaden a precise request into repository-wide organization.

## Maintain the bundle

Install and update the complete, versioned bundle with one command:

```bash
npx -y @life-os/cli@latest skill status
npx -y @life-os/cli@latest skill install
```

The bundle contains `lifeos`, `lifeos-today`, `lifeos-board`,
`lifeos-onboarding` and `lifeos-content`. The installer backs up locally modified
managed files, migrates legacy single-Skill installs, removes obsolete managed
files only after backup, and never downgrades a newer installed bundle.

## Scope

In scope: config-aware local Markdown queries and mutations plus routing to the
four LifeOS domain Skills.

Out of scope: Google Calendar / CalDAV sync, plugin or Aino UI implementation,
and direct editing of `.lifeos/custom-apps` internals.

---

# LifeOS Today

Read [LifeOS Core](#lifeos-core) first for host selection, vault
resolution and write safety.

## Start from the grounded view

For “what should I do today?”, use one bounded command rather than assembling a
brief from broad scans:

```bash
npx -y @life-os/cli today --json
```

Use `date=YYYY-MM-DD` only when the user names another date. Verify the returned
`sources`, distinguish overdue from due-today work, and recommend at most three
ordered next steps. Completed work is based on completion date, not due date.

Use these narrower commands when the user asks for a specific slice:

```bash
npx -y @life-os/cli tasks due=today --json
npx -y @life-os/cli tasks due=overdue --json
npx -y @life-os/cli tasks done completed=this-week --json
npx -y @life-os/cli recent range=this-week --json
npx -y @life-os/cli review:weekly --json
```

`due=` filters due dates. It cannot answer what was completed in a period; use
`completed=` or `review:weekly` for completion evidence.

## Work with periodic notes

Read [`references/periodic-notes.md`](references/periodic-notes.md) before
creating, reading, appending to or reviewing daily, weekly, monthly, quarterly
or yearly notes. Resolve the actual path and section through LifeOS rather than
guessing either one.

Show a source-backed brief or review before proposing a write. Append a plan,
review or synthesized conclusion only after the user approves the concrete
content and target section.

## Boundaries

- Use [LifeOS Board](#lifeos-board) for Workflow/PARA
  columns, theme workspaces or flow bottlenecks.
- Use [LifeOS Onboarding](#lifeos-onboarding) when the
  vault or periodic structure must first be initialized or migrated.
- Do not require Aino Desktop: `today`, `tasks`, `recent` and `review:weekly`
  reproduce the relevant AI Home evidence headlessly.

---

# LifeOS Board

Read [LifeOS Core](#lifeos-core) first for host selection, vault
resolution, association rules and write safety.

## Inspect the visible model

Choose the board from the user's intent or detected profile:

```bash
npx -y @life-os/cli board mode=workflow --json
npx -y @life-os/cli board mode=para --json
```

- `workflow` returns Input, Projects, open Tasks and Output.
- `para` returns Projects, Areas, Resources and Archives.

Ground analysis in returned column totals, bounded items and `sources`. Identify
the clearest bottleneck, no more than three worthwhile next steps, and any
blocker or tradeoff that needs confirmation. A board read never authorizes
moving, creating, tagging or editing an item.

## Work with themes

Read [`references/theme-notes.md`](references/theme-notes.md) before creating or
editing a project, area, resource, archive or topic workspace. Use time-oriented
notes for a day/week/month/quarter/year and theme notes for a durable subject.

Treat theme tags as optional user-owned associations. Never infer one from the
active file, a nearby project, related search results or the only visible theme.

## Boundaries

- Use [LifeOS Today](#lifeos-today) for daily planning,
  due work, recent activity and weekly review.
- Use [LifeOS Content](#lifeos-content) to synthesize a
  `.AI.md` page or HTML dashboard after the board identifies the target theme.
- Use [LifeOS Onboarding](#lifeos-onboarding) when the
  Workflow/PARA structure does not exist or must change profiles.

---

# LifeOS Onboarding

Read [LifeOS Core](#lifeos-core) first for host selection and
shared safety. Onboarding plan/apply is CLI-only; Aino Mobile can inspect a
profile but cannot perform this workflow.

## Inspect once, then route

For creation, import, paste, takeover or migration, start with the single
inventory command:

```bash
npx -y @life-os/cli onboard inspect --json
```

Read [`references/onboarding.md`](references/onboarding.md). Do not also run
broad `ls`, `find`, `config`, `profile` or template discovery unless inspection
fails or omits a decision-critical fact.

Load only the matching reference:

- Choose a model: [`references/template-selection.md`](references/template-selection.md)
- Empty folder: [`references/from-scratch.md`](references/from-scratch.md)
- Scattered material: [`references/migration.md`](references/migration.md)
- Existing profile to another profile:
  [`references/template-migration.md`](references/template-migration.md)

Template details:

- Memos: [`references/template-memos.md`](references/template-memos.md)
- IPO / Topic-only: [`references/template-ipo.md`](references/template-ipo.md)
- GTD: [`references/template-gtd.md`](references/template-gtd.md)
- PARA: [`references/template-para.md`](references/template-para.md)
- OPC: use the separate `opc` Skill.

Present the normal order from easiest to hardest as Memos -> IPO -> GTD -> PARA
-> OPC, but honor an explicit choice immediately. Normalize Topic-only to IPO.

## Gate every mutation

Treat onboarding as a resumable state machine:

1. Inspect the folder.
2. Ask one consequential question at a time.
3. Run `onboard plan ... --json` and show creates, skips and conflicts.
4. Obtain explicit confirmation for the exact profile, density and target.
5. Run `onboard apply` or a confirmed `classify-apply` in bounded scope.
6. Run `onboard verify --json` and report unresolved conflicts.

Never overwrite existing bootstrap Agent Files automatically. Profiles manage
root `AGENTS.md`, `SOUL.md` and `STYLE.md`; do not generate singular `AGENT.md`
or tool-specific `CLAUDE.md`. Create or edit optional `MEMORY.md` only after an
explicit remember request. Preserve attachments in place during inventory.

When changing profiles, merge settings by field, preserve user context, exclude
generated/system material, validate links and attachment pairs, and update the
profile manifest only after final verification.

---

# LifeOS Content

Read [LifeOS Core](#lifeos-core) first for host selection, exact
targeting, association rules and write safety.

## Locate before writing

Use bounded search and exact reads:

```bash
npx -y @life-os/cli search query="keyword" type=content limit=20 --json
npx -y @life-os/cli read path="vault/relative/note.md" --json
```

Use the returned vault-relative path for `append` or `create`. Read and merge
unknown Frontmatter/body content before `overwrite`. Route time-based capture to
[LifeOS Today](#lifeos-today) and durable project/topic
work to [LifeOS Board](#lifeos-board).

## Choose the content surface

- Non-Markdown attachment tags or properties: read
  [`references/attachment-cards.md`](references/attachment-cards.md). A binary
  file uses a hidden sibling Markdown card; do not invent an `attachment` field.
- Synthesized topic/index knowledge: read
  [`references/ai-wiki.md`](references/ai-wiki.md) and maintain the sibling
  `.AI.md`, source index and changelog contract.
- Visual decision surface beside a theme/index note: read
  [`references/theme-dashboard.md`](references/theme-dashboard.md) and reuse
  [`assets/theme-dashboard-skeleton.html`](assets/theme-dashboard-skeleton.html).
- Persistent interactive multi-record CRUD, forms, filters or repeated
  operations: read [`references/aino-mini-apps.md`](references/aino-mini-apps.md)
  and route development to Aino App Builder.

An AI Wiki is not a capture or meeting note. A theme dashboard is not a Markdown
export. An Aino mini app is not a replacement for Markdown as the business
source of truth.

## Boundaries

- Do not read binary content unless another tool actually extracts it.
- Do not generate or edit Aino App Builder project internals or operate
  `.lifeos/custom-apps` directly.
- Use [LifeOS Onboarding](#lifeos-onboarding) when the
  request changes the vault profile or classifies scattered folders.
