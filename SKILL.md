---
name: lifeos
description: "Read, query, edit, initialize, migrate, and organize a LifeOS knowledge base from the command line via the `lifeos` CLI — headless, no Obsidian or Aino required. Use for an empty folder or local Markdown folder; choosing and applying Memos / IPO / GTD / PARA templates; taking over an existing knowledge base; importing or pasting notes and materials; classifying or tagging non-Markdown images, video, audio, PDF, DOC, or PPT attachments through hidden metadata Markdown files; tasks or 待办; periodic notes; theme notes and tags; AI Wiki pages; theme HTML dashboards; searching notes; capturing thoughts; or checking and updating what is on the user's plate."
---

# LifeOS

Drive a LifeOS vault through the `lifeos` CLI. It is **config-aware** — it reads
the user's real PARA folder names, periodic-note formats, Obsidian Daily Notes
core settings and section headers — and **headless**, working directly on the
vault folder without Obsidian running. Query results match what the user sees in
the app.

When the host is **Aino Mobile**, this skill's core behavior is loaded by default
through native `lifeos_*` tools instead of the Node CLI. Never ask a mobile user
to run `npx`, Node.js, or shell commands. Use the native tools reported by
`lifeos_get_vault_info`; in particular, use `lifeos_weekly_review` for a weekly
summary and `lifeos_recent_files` for created/modified-file evidence. Native
write tools only prepare a target-and-content preview. The app must receive the
user's explicit confirmation and return a commit receipt before claiming that a
file or task changed. For exact edits, moves/renames, or recoverable deletion,
read the file first and pass the returned revision to `lifeos_patch_file`,
`lifeos_move_file`, or `lifeos_trash_file`; Mobile never exposes permanent
deletion. AI Wiki batch updates, sibling theme dashboards, and non-Markdown
attachment frontmatter updates are also available through confirmed native tools. Mobile
can inspect the profile, but onboarding plan/apply remain CLI-only; report that
limitation instead of suggesting Node commands on the phone. CLI examples below
apply to headless/desktop hosts.

## Core concepts (核心概念)

LifeOS organises a vault as two complementary kinds of note. Knowing which one a
request is about tells you which command to reach for.

**Periodic notes (周期笔记)** — organised by **time**. One file per period; resolve
its path with `npx -y @life-os/cli <period>`. The longer the period the less predictable it is,
so longer periods are for goals and shorter ones for tasks:

- **yearly (年记)** / **quarterly (季记)** — long-term: **goal management (目标管理)**,
  set the direction for the year / quarter.
- **monthly (月记)** / **weekly (周记)** — short-term: **task management (任务管理)**,
  break those goals into this month's / week's tasks.
- **daily (日记)** — daily records: real-time capture of thoughts, tasks and time
  tracking. Most capture lands here.

**Theme notes (主题笔记)** — organised by **subject**, usually via **PARA**. These live
in the user's PARA folders (see `npx -y @life-os/cli config`); reach them with `search`/`read`.
The later→earlier order is increasing actionability (archive → resource → area → project):

- **project (项目)** — most actionable: a concrete goal with a deadline, e.g. 「完成季度报告」.
- **area (领域)** — an ongoing responsibility to maintain, e.g. 「健康」「财务」.
- **resource (资源)** — a topic of interest or reference material, e.g. 「读书笔记」.
- **archive (归档)** — finished or inactive projects / areas / resources.
- PARA is just the common shape; a theme can be any subject (e.g. 「#节日」).

**The link between them — theme tags (主题标签)**: each theme note is identified by a
unique tag. Any task / fleeting note / file anywhere — including inside a daily or
other periodic note — that carries that tag is **automatically indexed** into the
theme note. This is what makes capture stress-free: jot with the right `#tag` now,
find it under the theme later.

- **Top-down (自上而下)**: tasks planned in a theme note surface in the daily note on
  their planned date, so `tasks due=today` reflects project/goal plans.
- **Bottom-up (自下而上)**: a tagged thought or todo in the daily note is collected
  back into the matching theme note via its tag.

So: when a user talks about a 项目/领域/资源/主题, work in the theme note; when they
talk about a day/week/month/quarter/year or "what's on my plate today", work in the
periodic note. Reuse a theme's tag only when the user explicitly selected that
association, the original content already carries it, or a durable user preference
authorizes automatic association. A relevant-looking theme in the current context is
only a candidate, not confirmation.

**Non-Markdown attachment frontmatter** — a hidden metadata Markdown file
beside a non-Markdown attachment. `Assets/合同.pdf` maps only by filename to
`Assets/.合同.pdf.md`; the file carries `aino-type: attachment-card`,
`aino-version: 1`, and arbitrary user properties such as `tags`, `status`, or
`owner`. When the user asks to tag or set properties on a PDF, image, audio,
video, Office file, or another non-Markdown attachment, read and follow
[`references/attachment-cards.md`](references/attachment-cards.md). Never add an
`attachment` field or body embed; association comes only from the sibling
filename.

**AI Wiki (`.AI.md`)** — a third layer that sits **beside** the topic note as a
sibling `{filename}.AI.md` file. It is the LifeOS AI Wiki: a synthesised
summary page of what the vault knows about that topic, maintained
incrementally by this skill. Only **topic / index notes** get one — never
captures, dailies, meeting notes, or other one-off source files. When the
user says "整理一下 X 主题"、"更新 AI Wiki"、"看看 AI Wiki 怎么说", follow the
rules in [`references/ai-wiki.md`](references/ai-wiki.md): it covers source
scope, page schema, ingest / query / lint flows, and the concrete CLI
recipes that touch `7 索引/7. AI Wiki 索引.md` and `7 索引/AI Wiki 变更日志.md`.

**Template profiles (模板档案)** — LifeOS vaults can be generated from different
templates. Run `npx -y @life-os/cli profile` when the workflow model matters:

Present them from easiest to hardest as **Memos -> IPO -> GTD -> PARA -> OPC**.
This is a default recommendation order, not a mandatory migration route; jump
directly to the template that matches a clear user bottleneck.

- **Memos**: periodic notes only; continuous bullets and tasks first, with no
  theme taxonomy. Prefer it when the user has not formed a capture habit or is
  coming from Logseq, flomo, or usememos. Read
  [`references/templates/memos.md`](references/templates/memos.md).
- **IPO / Topic-only**: input -> theme processing -> output. Topic-only is the
  user-facing fallback for people who simply want to organize by topic; it uses
  the IPO profile and directory structure. Read
  [`references/templates/ipo.md`](references/templates/ipo.md).
- **GTD**: inbox -> next actions / waiting / someday / review. Read
  [`references/templates/gtd.md`](references/templates/gtd.md).
- **PARA**: periodic notes plus projects / areas / resources / archives. Read
  [`references/templates/para.md`](references/templates/para.md).
- **OPC**: a one-person-company operating system. Use the separate `opc` skill.

Every generated profile carries three root-level bootstrap Agent Files:
`AGENTS.md` (entry point and working rules), `SOUL.md` (assistant identity), and
`STYLE.md` (communication style). `MEMORY.md` is optional, free-form durable
memory: create it only when the user explicitly asks the agent to remember
something, and never template-upgrade or rewrite an existing file. The three
bootstrap files' profile sections must match the selected template. Do not
generate singular `AGENT.md` or tool-specific `CLAUDE.md` as template files.

**Theme dashboard (`.html`)** — a visual decision surface beside a theme/index
note as a sibling `{filename}.html` file. It is not a Markdown export and not an
`.AI.md` wiki page. It should be a beautiful, practical standalone dashboard
that shows the topic's state, theme tag, indexed signals, key judgments, next
actions, risks, material map and source links. When the user says "生成主题 dashboard"、"主题看板"、
"主题仪表盘"、"做一个 HTML dashboard", follow
[`references/theme-dashboard.md`](references/theme-dashboard.md): it defines the
source workflow, same-directory same-name HTML path rule, information
architecture, visual design contract and write command.

## Invocation

Run the CLI with **`npx -y @life-os/cli`** — npx fetches the published package on
first use and `-y` skips the install prompt; nothing needs to be installed
globally. Every example below is written in that form.

## First moves

1. If the user wants to create, migrate, import, paste into, or take over a
   knowledge base, run `npx -y @life-os/cli onboard inspect --json` and read
   [`references/onboarding.md`](references/onboarding.md) before changing files.
   Treat this command as the single initial inventory: do not also run `ls`,
   `find`, `config`, `profile`, or `onboard templates` unless inspection fails
   or omits information required for the next decision.
2. If the detected source profile differs from a requested target profile, read
   [`references/template-migration.md`](references/template-migration.md). Treat
   it as a reviewed migration with scope, settings diff, batches, and final
   verification—not as fresh onboarding or a template toggle.
3. If the user already chose Topic-only mode, map it directly to the IPO
   profile. After inspection, go straight to `onboard plan profile=ipo ...`;
   do not ask them to choose another template and do not run template-discovery
   commands merely to confirm that mapping.
4. Otherwise, run `npx -y @life-os/cli config` to confirm which vault and settings are in
   effect. If it can't find a vault, ask the user for the path and pass
   `vault=<path>`.
5. Run `npx -y @life-os/cli profile` when the vault template matters outside an
   onboarding flow whose target template is already known. It detects
   Memos, IPO, GTD, PARA, OPC, custom or unknown and lists recommended references.
6. `npx -y @life-os/cli help` is the authoritative command list. For exhaustive
   flags, output shapes and error codes, read
   [`references/commands.md`](references/commands.md).
7. For LifeOS AI Wiki maintenance (`.AI.md` topic pages, the central index,
   the changelog and lint checks), read
   [`references/ai-wiki.md`](references/ai-wiki.md).
8. For theme HTML dashboard generation (`{topic}.html` beside a theme/index
   note), read [`references/theme-dashboard.md`](references/theme-dashboard.md).
9. For tags or other Frontmatter properties on a non-Markdown file, read
   [`references/attachment-cards.md`](references/attachment-cards.md) before
   writing the hidden sibling metadata file.

## Syntax

- Options are `key=value` (e.g. `tag=work`, `limit=10`). `--key=value` also works.
- Flags are bare words after `--` (e.g. `--json`) or plain (`overwrite`, `case`).
- Quote values with spaces: `vault="~/My Vault/LifeOS"`.
- Add `--json` whenever you need to parse output programmatically.

## Vault selection

This skill is installed **inside the user's vault**, so you normally run from
within it — the CLI auto-detects the vault from the current directory. Resolution
order (first match wins): `vault=` → `$LIFEOS_VAULT` → walk up from cwd for
`.obsidian/`, `.lifeos/`, or `.agents/skills/lifeos/` → the folder Aino last opened (fallback). Only pass
`vault=` when the user means a _different_ vault than the one you're in.

## Commands at a glance

```bash
# every command is invoked as: npx -y @life-os/cli <args>
npx -y @life-os/cli config                          # vault + effective settings (run this first)
npx -y @life-os/cli profile                         # detect Memos / IPO / GTD / PARA / OPC / custom profile
npx -y @life-os/cli onboard inspect --json          # inventory a plain local folder and its attachments
npx -y @life-os/cli onboard templates locale=en     # list exact Memos / IPO / GTD / PARA structures, easiest first
npx -y @life-os/cli onboard plan profile=memos density=full locale=en  # preview a capture-first vault
npx -y @life-os/cli onboard plan profile=para density=minimal locale=en  # preview only
npx -y @life-os/cli onboard apply profile=para density=minimal locale=en # write after confirmation
npx -y @life-os/cli tasks [todo|done|all]           # tasks; filters: tag= keyword= due=... completed=... limit=
npx -y @life-os/cli recent range=this-week --json   # created/modified/observed files in the date range
npx -y @life-os/cli review:weekly --json            # one source-backed weekly review bundle
npx -y @life-os/cli search query=<text>             # type=file (default) | tag | content ; add `case` for content
npx -y @life-os/cli read file=<name>|path=<p>       # print a note
npx -y @life-os/cli daily|weekly|monthly|quarterly|yearly        # show the period note's path + whether it exists
npx -y @life-os/cli <period>:read                   # print the period note
npx -y @life-os/cli <period>:create                 # create the period note from its configured template
npx -y @life-os/cli <period>:append content=<t>     # append (creates from template if missing)
npx -y @life-os/cli theme:create type=project|area|resource|archive|theme tag=<t> path=<p>   # create a PARA note from its template
npx -y @life-os/cli append path=<p> content=<t>     # append to an existing note
npx -y @life-os/cli create path=<p> [content=]      # create a plain note (no template; add `overwrite` to replace)
npx -y @life-os/cli create path=<topic.html> content=<html> overwrite  # write a sibling theme dashboard
npx -y @life-os/cli task done|todo ref=<file>:<n>   # toggle a task by its file:line reference
```

## Knowledge base onboarding

Treat onboarding as a resumable conversation, not a one-shot folder generator.
Inspect first, ask one consequential question at a time, preview every write,
and require explicit confirmation before `onboard apply` or
`onboard classify-apply`.

For the normal preview path, use at most two CLI invocations before showing the
user a plan: `onboard inspect --json`, then `onboard plan ... --json`. A direct
template choice from the user removes the need for template discovery. Run
`onboard status`, `config`, `profile`, `onboard templates`, or broad filesystem
listing only when a concrete gap or recovery condition makes it necessary.

- Read [`references/onboarding.md`](references/onboarding.md) for the state
  machine and command order.
- Read [`references/template-selection.md`](references/template-selection.md)
  before recommending Memos, IPO / Topic-only, GTD, PARA, or OPC.
- Read [`references/migration.md`](references/migration.md) when existing notes,
  pasted material, or scattered attachments need classification.
- Read [`references/template-migration.md`](references/template-migration.md)
  when an existing LifeOS profile is changing to another template.
- Read [`references/from-scratch.md`](references/from-scratch.md) for an empty
  folder so the result contains the user's first useful content, not only empty
  directories.

A local Markdown folder is sufficient. `.obsidian/` is optional. Preserve
attachments in place during inventory; visibility does not mean their binary
contents were parsed. Never claim to understand DOC, PPT, audio, or video
contents unless another tool actually extracted them.

`onboard plan/apply` includes the selected profile's three bootstrap Agent
Files. Missing files are created in the requested locale. Existing files are
surfaced as conflicts with target content and are never overwritten
automatically. An existing `MEMORY.md` remains outside template management and
must stay byte-for-byte unchanged unless the user explicitly asks the agent to
edit its durable memory. For a profile conversion, preserve user-authored rules
while applying only the reviewed target-profile sections described in
[`references/template-migration.md`](references/template-migration.md).

**Template-aware creation:** `<period>:create`, `theme:create`, and the auto-create
inside `<period>:append` all render the user's **configured template** through the
same engine the plugin/Aino use — `{{snapshot:Project}}`, `{{if weekday}}`,
`{{date}}` etc. are expanded, and theme notes get their tag injected into
frontmatter. Plain `create path=…` stays template-free (use it for arbitrary notes).
When `create path=…` is given an explicit `.html` / `.htm` extension, that
extension is preserved for theme dashboards.

## Recipes (chain commands like this)

**Morning review** — what's on my plate, then capture the plan:

```bash
npx -y @life-os/cli tasks due=today --json          # today's open tasks
npx -y @life-os/cli tasks due=overdue --json        # anything slipping
npx -y @life-os/cli daily:append section="日常记录" content="- 08:30 #计划 今天先做 ..."
```

**Quick capture** — "记一下：想法X" (drop a timestamped line into today's record section):

```bash
npx -y @life-os/cli daily:append section="日常记录" content="- 14:30 #摘抄 想法X"   # echoes the resolved path
```

**Find then act** — never write blind:

```bash
npx -y @life-os/cli tasks keyword="季度报告"        # locate the task, note its file:line
npx -y @life-os/cli task done ref="0. 周期笔记/2025/Daily/05/2025-05-30.md:14"
```

**Research a topic across the vault**:

```bash
npx -y @life-os/cli search query="超线性回报" type=content limit=20   # path:line + matching text
npx -y @life-os/cli read path="-1. 捕获/....md"                       # open the most relevant hit
```

**Tag a non-Markdown attachment** — derive the exact hidden sibling path, then
read/validate/merge rather than overwriting unknown Frontmatter:

```bash
npx -y @life-os/cli read path="Assets/.合同.pdf.md" --json
npx -y @life-os/cli create path="Assets/.合同.pdf.md" content="<完整合并后的 Frontmatter>" overwrite
```

The read may report that the hidden metadata file does not exist; create it
only after the user requested a property change. Follow
[`references/attachment-cards.md`](references/attachment-cards.md) for identity,
conflict, Windows hiding, and Mobile rules.

**Generate a theme dashboard** — read the topic, gather high-signal context, then
write the same-directory same-basename `.html` file:

```bash
npx -y @life-os/cli read path="4 资源/学日语/学日语.md"
npx -y @life-os/cli read path="4 资源/学日语/学日语.AI.md"   # ok if missing — handle the error
npx -y @life-os/cli create path="4 资源/学日语/学日语.html" content="<!doctype html>..." overwrite
```

Before generating the HTML, read
[`references/theme-dashboard.md`](references/theme-dashboard.md). The dashboard
must be visually polished and operationally useful, with state, judgment, next
actions, risks and source material visible in a responsive standalone page.

**Weekly review**:

```bash
npx -y @life-os/cli review:weekly --json            # weekly note + completed/open tasks + bullets + recent files
# Show the sourced review first. Only after explicit user confirmation:
npx -y @life-os/cli weekly:append content="## 复盘\n..."
```

## Journaling (日记)

The daily note is where most capture lands. Do it precisely:

1. **Locate** — `npx -y @life-os/cli daily` shows today's path and `Exists`. Pass
   `date=YYYY-MM-DD` for another day, `locale=` for weekday/month names. For
   daily notes, the CLI honors Obsidian's `.obsidian/daily-notes.json`
   `folder` + `format` first, so never hand-build a path like
   `Daily/YYYY-MM-DD.md`.
2. **Insert in the right place** — append into the record section with
   `section=<header>`, not the file tail. The header is the daily note's main
   record heading (commonly `日常记录` / `Daily Record`); confirm it by reading a
   recent daily note. `section=` lands the line at the **end of that section**
   (e.g. before `习惯打卡` / `Habit`) and creates the section only if absent.
3. **Format** — use `- HH:mm 内容` when no tag was explicitly selected, or
   `- HH:mm #tag 内容` when the user supplied or previously confirmed the tag. Use
   the current time from the environment; the user is usually in their local
   timezone. When a tag is authorized, reuse the existing vocabulary —
   `npx -y @life-os/cli search type=tag keyword=<x>` — rather than inventing a
   fine-grained tag.
4. **Polish, don't transcribe** — lightly smooth the user's words while keeping
   their facts, stance, emotion and first-person voice; add no judgments, advice
   or conclusions they didn't make. When they say `原文`/`逐字`/`原样`/`摘抄`/verbatim,
   or paste a quote, keep it exact and only tidy Markdown.
5. **Creating a missing daily note** — just use `<period>:create` (or let
   `<period>:append` auto-create it). For daily notes, the CLI also honors the
   Obsidian Daily Notes core `template` path when configured. It renders the
   user's configured template via the shared engine: `{{snapshot:Project}}`
   expands to the live PARA index list, `{{if weekday}}`/`{{date}}`/etc. are
   resolved, and LifeOS query blocks (`ProjectListByTime`, `TaskDueListByTime`)
   are kept verbatim for the plugin to render at view time. No manual template
   rendering needed — the resulting note matches what the plugin/Aino would
   create.

The same `section=` works on `weekly|monthly|...:append` and on plain
`append path=<p> section=<h>`, so you can log into any note's heading.

## Creating tasks without guessing associations

Project/theme tags are optional user-owned associations. Do not add one merely
because it appears in the active file, a periodic-note project list, related
files, search results, semantic context, or as the only visible project.

- Add a project/theme tag during creation only when the user explicitly names
  that tag or association, the original task text already contains it, or a
  durable user preference explicitly authorizes automatic association.
- If a tag only looks relevant, create and verify the requested task without
  that inferred tag first. After the task is actually created, ask a short,
  non-blocking follow-up such as: `This may belong to #Project. Add that tag?`
- Ask only after a successful write and verification. If a preview or
  confirmation gate has not committed the task yet, wait for its commit receipt.
- When the user confirms, update the task that was just created. Never create a
  duplicate task, and never claim the association exists before the tag is saved.

## Creating theme notes (项目/领域/资源/归档)

Use `theme:create` so the note is built from the PARA type's template and gets
its theme tag wired into frontmatter (so the theme index collects it):

```bash
# read config first for the real PARA folder names, then place the note yourself
npx -y @life-os/cli config
npx -y @life-os/cli theme:create type=project tag="项目/季度OKR" path="1. 项目/季度OKR/季度OKR.md"
```

- `type=` picks the template (`<type>TemplateFilePath` → `<typeDir>/Template.md` → built-in).
- `tag=` is the theme tag; it's injected into `tags`/`aliases` frontmatter.
- `path=` is yours to choose — the convention is `<paraDir>/<name>/<name>.md` (a
  folder + same-named index note, which is what `{{snapshot}}` lists). Add
  `overwrite` to replace.

## Generating theme dashboards (主题 dashboard / 主题看板)

Use a sibling `.html` file when the user wants a visual dashboard for a project,
area, resource, archive or other topic:

```bash
# source note -> dashboard HTML
4 资源/学日语/学日语.md -> 4 资源/学日语/学日语.html
```

Always load [`references/theme-dashboard.md`](references/theme-dashboard.md)
first. Also run `profile` and load the matching template reference when it is
PARA / IPO / GTD. The generated page must be a beautiful, practical dashboard,
not a plain Markdown conversion. It should surface theme tag, indexed task /
bullet / file signals, current state, key judgments, metrics or missing signals,
next actions, risks, material map, timeline and source links. Keep it
standalone, responsive and offline-friendly.

Write the final HTML with an explicit `.html` path:

```bash
npx -y @life-os/cli create path="4 资源/学日语/学日语.html" content="<full html>" overwrite
```

If an existing dashboard is present, read it before overwriting and preserve any
useful manually curated structure unless the user asks for a full regeneration.

## Upgrading the skill

The skill files inside `.agents/skills/lifeos/` should match your CLI version.
Check the installed version and managed-file integrity with:

```bash
npx -y @life-os/cli@latest skill status
npx -y @life-os/cli@latest skill install
```

The install command copies the bundled SKILL.md + references into your vault's
`.agents/skills/lifeos/` — no manual download or git clone. Legacy or locally
modified managed files are backed up below `.agents/skills/lifeos/.backup/`
before replacement, and the installer never downgrades a newer installed version.

## Writing safely

- Writes (`append`, `create`, `task`, `<period>:append`) take an **explicit
  `path=` / `ref=`** — they never guess a note from a loose name, so you won't
  write to the wrong same-named file. `search`/`tasks` first to get the exact
  target, then write.
- Non-Markdown attachment frontmatter writes require an exact attachment path.
  Derive the hidden sibling path mechanically, preserve unknown Frontmatter, and
  never use `overwrite` until the existing file is verified as valid for that
  attachment.
- `create` errors with _"A note already exists…"_ unless you pass `overwrite`.
- Periodic `:append` **echoes the resolved path** and creates the note if missing.
  If `Exists: no` surprises you, the vault's format config may differ from how
  existing notes were named — surface the path to the user rather than creating a
  stray note.

## Interpreting results

- Tasks print `[ ]`/`[x] <text>  (due …  !priority  #tags)  — <file>:<line>`.
  The `<file>:<line>` is the stable reference for `task done|todo`.
- `tasks` defaults to open (todo); pass `done`/`all` to widen. `due=` queries also
  hide completed tasks by default.
- PARA folder names are the user's own (e.g. `1. 项目`) — see `npx -y @life-os/cli config`.
- Errors are human-readable and exit non-zero (e.g. file-not-found, already-exists).

## Performance

Index-backed commands (`tasks`, `search type=file|tag`) rebuild the index per run
(~1s on a ~5k-note vault); `search type=content` scans note bodies (~0.5s). Fine
for interactive use; avoid tight loops of many index queries.

## Scope

Reading, querying and editing note content (notes, tasks, periodic notes, PARA,
tags), safely managing hidden metadata for explicitly selected non-Markdown
attachments, onboarding local Markdown folders, safely classifying
existing files, and generating standalone theme HTML dashboard files beside
topic notes.
**Not** in scope: Google Calendar / CalDAV sync, and the plugin's UI — those live
in the LifeOS plugin and Aino app.
