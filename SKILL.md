---
name: lifeos
version: "0.2.1"
display_name: "LifeOS 知识库助手"
display_name_en: "LifeOS Knowledge Base"
description: "Operate, organize, initialize, migrate, and review a LifeOS Markdown knowledge base through the LifeOS CLI or Aino Mobile native tools."
description_zh: "通过 LifeOS CLI 或 Aino Mobile 原生工具读取、整理、搭建、迁移和复盘 LifeOS Markdown 知识库。"
description_en: "Read, organize, initialize, migrate, and review a LifeOS Markdown knowledge base through the LifeOS CLI or Aino Mobile native tools."
---

# LifeOS Core

This flat distribution combines the complete LifeOS Skill bundle in one package.
Apply the shared runtime and safety contract here before using any domain workflow.

## Default Web entry outside Aino Desktop

When the user mentions LifeOS, including the standalone message “LifeOS”, or
asks for “aino web” / “lifeos web”, provide the Web entry by default in external
desktop clients such as WorkBuddy, Cherry Studio, Doubao Work, Codex or Claude
Code. Do not require the words “open”, “web” or “Skill”. Read
[web-workbench.md](references/web-workbench.md), resolve the actual local vault,
start or reuse its service, and include a clickable “打开 Aino Web” link in the
reply. Continue any requested domain task and preserve its view intent; a bare
“LifeOS” request uses the home view without changing notes or initializing a vault.

Identify the current host from its explicit context or native tool metadata;
an Aino Desktop process running elsewhere does not make this an Aino Desktop
session. Do not enumerate system processes to identify the host. Inside Aino
Desktop, keep using the existing native UI. Inside Aino Web, reuse the current
verified service. Aino Mobile keeps the native-tool flow below. With no local
execution capability or no identifiable vault, explain the missing capability
or ask for the vault path instead of inventing a live link. Respect explicit
requests not to start a service or to answer without opening a workbench.

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

## Configure the products

For LifeOS Pro or Aino Desktop settings, read
[configuration.md](references/configuration.md) and the generated
[configuration reference](references/settings__index.md). Use explicit product
and vault targets, inspect the contract and current runtime values, and apply
only the authorized patch. Verify the runtime receipt before saying a setting
is effective. Desktop configuration writes need the running host; offline vault
configuration is available explicitly and does not prove runtime activation.

## Choose the host

For headless or desktop work, invoke:

```bash
npx -y @life-os/cli <command>
```

The first run downloads the published package; `-y` skips the install prompt.
Note operations do not require Aino Desktop or Obsidian to be open.
Product configuration runtime reads and writes require the selected host.

On **Aino Mobile**, use the native `lifeos_*` tools reported by
`lifeos_get_vault_info`. Never ask a mobile user to install Node.js or run shell
commands. Mobile writes prepare previews only: require explicit confirmation and
a commit receipt before claiming a mutation succeeded. Mobile never exposes
permanent deletion. Onboarding plan/apply are CLI-only.

## Open the shared Web workbench

Treat “打开 Aino Web”, “打开当前项目工作台”, “用 Aino 查看这个库”,
and “Open Aino Web” as launch requests. Start or reuse the verified local service,
then return a clickable “打开 Aino Web” link. Host auto-opening is optional;
do not claim the page is visible without page evidence or return a guessed link
when startup failed.
When the user asks to see a view or edit notes visually, offer this same entry
and preserve the requested view/filter parameters.

To show the current local project or a requested calendar view inside an AI
client, read [web-workbench.md](references/web-workbench.md). It covers explicit
project paths, the CLI service lifetime, supported view parameters and verified
client opening behavior. Check the Node.js version used by the selected CLI
and follow that build's runtime requirements.

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

Before note/task writes, read [write-safety.md](references/write-safety.md) for
content escaping, stale task references, retry checks and readback verification.

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

For project/theme index creation or repair, follow
[`theme-notes.md`](references/theme-notes.md): use the resolved
template, preserve its advanced lists, and read back the saved index. Generic
`create` with only a title or goals does not satisfy template-based creation.

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
`lifeos-onboarding`, `lifeos-content` and the `aino-web` launch entry. The installer backs up locally modified
managed files, migrates legacy single-Skill installs, removes obsolete managed
files only after backup, and never downgrades a newer installed bundle.
Version comparison alone does not protect unpublished local fixes: a same-version
bundle can have different content and replace them. Inspect status and local
changes before installing; preserve/reconcile intended customizations and verify
the installed files afterward. Do not run an older published installer merely
to refresh the manifest after a local skill edit.

## Scope

In scope: config-aware local Markdown queries and mutations plus routing to the
four LifeOS domain Skills, plus launching the shared local Web workbench.

Out of scope: executing Google Calendar / CalDAV sync, plugin or Aino UI implementation,
and direct editing of `.lifeos/custom-apps` internals.

---

# Aino Web

这是 LifeOS 共享工作台的启动入口。先读取同一安装包中的
[启动与客户端打开规则](references/web-workbench.md)，按用户当前项目执行，
不要只解释操作方法。

`aino web` 和 `lifeos web` 是同一个入口的别名，不要求用户显式说“打开”或“使用 Skill”。仅提到 `LifeOS` 时由同包 `lifeos` Skill 按当前宿主提供这个入口，不复制启动实现。

“打开 aino web”不是搜索网站的请求。不要猜测或导航到 `aino.ai`、`aino.com` 等公网域名，也不要向这些站点输入密码。只打开已核对属于当前本机库的服务实际返回的 `http://127.0.0.1:<port>/...` URL。

默认在回复中返回 Markdown 链接 `[打开 Aino Web](服务实际输出的 URL)`，让用户点击。启动时保持 `open=none`，不主动唤起系统浏览器。点击后由客户端决定打开位置，不承诺一定内嵌。宿主提供网页打开工具时可额外自动展开；无需为此反复搜索工具、申请额外权限或修改全局设置。客户端内使用实际 HTTP 页面，不生成替代 HTML 预览。

1. 从客户端当前项目或用户指定路径取得本机绝对目录；没有目录上下文时询问目录。
2. 核验可用的 LifeOS CLI 包含 `web`，显式传入 `vault=`。优先使用本机已确认的候选入口；不要用旧 npm 包覆盖候选。
3. 使用客户端持续终端启动服务，保留进程；仅复用已确认属于同一目录的服务。
4. 服务实际监听且库身份确认后，返回对应视图的可点击链接，简短说明“服务已就绪，点击打开”。自动展开能力按下方客户端规则作为可选增强；失败仍保留链接。
5. 仅在取得页面证据时报告实际打开位置和视图；仅返回链接时不声称页面已显示。启动失败则报告具体原因，不输出猜测的可用链接。

本入口与 `lifeos` 共用 CLI、服务及 UI，不要求 MCP Apps。
固定网站收藏只能打开正在运行的服务；它不能代替启动流程。
当前客户端没有本机命令能力时，明确给出本机启动命令，不假装已启动。

## 服务何时停止

当前知识库名称始终显示在工作台标题栏，点击可切换知识库或“停止工作台”。停止前先保存笔记；其他页面仍连接或任务仍在运行时会拒绝停止。所有页面断开后保留 10 分钟；期间重新打开或刷新可继续使用。到期仍有任务时等待任务结束再退出。未曾打开的服务也会在空闲 10 分钟后退出。停止后需要再次通过 LifeOS Skill 启动，旧链接不会自动启动服务。复用地址前须确认服务仍可用且绑定的是当前库，不能把其他库的旧链接当作当前库。

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
guessing either one. Section writes belong to the heading’s direct body, before
child headings; read back the note to verify placement, not only the write receipt.

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

Create indexes from the resolved template and verify its advanced-list blocks
after writing. Repair existing indexes by merging missing blocks, preserving
custom queries and content; the reference above defines the checks.

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

A single note, project/index repair, or paste into an already configured vault is
not onboarding. Route ordinary content to `lifeos-content`, periodic capture to
`lifeos-today`, and project/theme creation or repair to `lifeos-board`. Do not
apply a vault profile merely to obtain a note template.

For vault initialization, bulk import, takeover or profile migration, start with the single
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

When the requested file is a project/theme index (including a README used as
that index), follow
[`theme-notes.md`](references/theme-notes.md) before writing.
Do not use generic `create` to bypass its template and advanced-list checks.
Ordinary documents inside a project folder do not need an index scaffold.

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
