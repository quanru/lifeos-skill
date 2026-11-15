# LifeOS AI Wiki — maintenance rules

A LifeOS vault can host a **distributed AI-maintained wiki**: each topic /
index note gets a sibling `{filename}.AI.md` page that synthesises what the
vault knows about that topic. This file is the authoritative spec for how to
create, update, query and lint those pages.

Use it whenever the user asks you to "整理一下 X 主题"、"更新 AI Wiki"、
"看看 AI Wiki 怎么说" or anything similar.

## Contents

- [Source scope](#source-scope)
- [Wiki page schema](#wiki-page-schema)
- [Ingest flow](#ingest-flow)
- [Query flow](#query-flow)
- [Lint flow](#lint-flow)
- [Out of scope](#out-of-scope)

## Source scope

Resolve source directories through `config` and the detected profile. All numbered
Chinese paths below are examples from one vault, not defaults to create in
another vault. Discover the existing wiki index and changelog before writing;
if absent, choose their exact paths within the requested scope, reusing the
vault's language and structure rather than inventing `7 索引/`.

**Do not rewrite source notes** during AI Wiki ingestion unless the user
explicitly asks for source-note edits.

Only **topic or index notes** receive `.AI.md` companions. Do **not** create
`.AI.md` pages for individual capture notes, articles, imported sources,
meeting notes, or other non-index source files. If a source note contains
durable knowledge, use an existing authorized topic association or ask before
adding one; relevance alone does not authorize retagging or moving the source.

Create companions only for the requested topic/index scope. Derive the sibling
from the actual source basename: `X.md` -> `X.AI.md`, `README.md` ->
`README.AI.md`, `X.README.md` -> `X.README.AI.md`. Do not use the folder name when
it differs from the index basename. Section/archive-family overview pages need
an existing source index and appropriate user scope; do not populate every topic
or create another companion merely because an example uses a different name.

## Wiki page schema

Every `.AI.md` page must include this frontmatter:

```yaml
---
type: wiki/主题
source: '[[同目录下的主题/索引笔记]]'
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

Allowed `type` values:

- `wiki/主题` — cross-source synthesis page

Body convention — **required** sections (in this order):

```markdown
## 一句话摘要

<one sentence: purpose + current focus>

## 核心判断

- <durable insight 1>
- <durable insight 2>
  (3–6 bullets; long-lived judgements, not status)

## 材料地图

- N 篇子笔记 (类别 / 类别)
- 关联主题:[[相关主题.AI]]
- 关键节点:<recent milestone>

## 复盘

- 做对了:<what worked, why>
- 做错了:<what didn't work, why>
- 学到:<takeaway worth keeping>
  (short, specific. If a phase just ended, anchor to the period.)

## 下一步行动

- [优先级] <具体动作> — <时间感:本周/本月/下季>
- [优先级] <具体动作> — <时间感>
  (2–5 bullets. Must be specific, owner-clear, time-anchored.
  The goal of this page is to drive the topic forward,
  not just summarise it.)
```

The last two sections — **复盘 / 下一步行动** — are what make this a
working wiki instead of an archive. Without them the page just summarises
the past; with them it steers the topic.

## Ingest flow

When maintaining a topic or index note in the AI Wiki:

1. **Read** the topic/index note and related local context.
2. **Create or update** the sibling `{filename}.AI.md` page — only when the
   source is a topic or index note.
3. **Link** to related topic `.AI.md` pages where the relationship is durable.
4. **Update** the resolved central wiki index with the page link and one-line
   summary.
5. **Append** an operation entry to the resolved wiki changelog.

Read the page, central index and changelog before updating. Preserve `created`,
unknown frontmatter and useful manual content; set `updated` to the actual local
edit date. Use `overwrite` only for a read-and-merged existing page, never for a
new page. Replace the existing central-index entry instead of appending a second
link; record each completed operation once. On interruption, inspect all three
files and resume only missing steps. Read back the page, index link and log;
report partial completion if any step fails. Do not report a full wiki update
based on the page write alone.

### Concrete lifeos CLI commands

```bash
# 1. locate the topic note and confirm vault layout
npx -y @life-os/cli config
npx -y @life-os/cli search query="学日语" type=file

# 2. read the topic note + any sibling that already exists
npx -y @life-os/cli read path="4 资源/学日语/学日语.md"
npx -y @life-os/cli read path="4 资源/学日语/学日语.AI.md"   # ok if missing — handle the error

# 3. update an existing, read-and-merged sibling; omit overwrite for a new page
npx -y @life-os/cli create path="4 资源/学日语/学日语.AI.md" content="---\ntype: wiki/主题\nsource: \"[[学日语]]\"\ncreated: 2026-06-07\nupdated: 2026-06-07\n---\n\n## 一句话摘要\n..." overwrite

# 4. only if this page has no index entry yet, append under the resolved section
npx -y @life-os/cli append path="7 索引/7. AI Wiki 索引.md" section="4 资源" content="- [[4 资源/学日语/学日语.AI|学日语]] — 五十音过关 / 每日 30 分钟 / N4 目标"

# 5. log the operation in the changelog
npx -y @life-os/cli append path="7 索引/AI Wiki 变更日志.md" content="- 2026-06-07 update 4 资源/学日语/学日语.AI.md — refreshed core take + materials map"
```

Always use `overwrite` on step 3 only after reading the existing page — the
goal is incremental synthesis, not blind replacement.

## Query flow

When answering from the AI Wiki:

1. **Read the resolved central wiki index first**, when one exists. A missing
   index does not authorize creating one during a read-only query; locate the
   requested topic and its existing companion directly.
2. **Open** the relevant `.AI.md` pages.
3. **Read original source files** only when the wiki page is missing, stale,
   or insufficient.
4. If a query produces durable synthesis, update the relevant topic `.AI.md`
   page **when requested**. Do not create standalone non-topic `.AI.md` pages
   unless the user explicitly overrides this rule.

```bash
npx -y @life-os/cli read path="7 索引/7. AI Wiki 索引.md"
npx -y @life-os/cli read path="4 资源/学日语/学日语.AI.md"
npx -y @life-os/cli search query="五十音" type=content limit=10   # fall back to source scan
```

## Lint flow

Run these checks during AI Wiki maintenance:

- `.AI.md` pages missing required frontmatter
- wiki pages not present in the resolved central wiki index
- `.AI.md` pages attached to non-topic source notes
- obsolete `updated` dates after content changes
- orphaned pages with no incoming index link
- duplicate topic pages that should be merged or cross-linked

Useful one-liners:

```bash
npx -y @life-os/cli search query=".AI.md" type=file limit=100   # bounded candidates, not a complete inventory
npx -y @life-os/cli search query="type: wiki/" type=content limit=100   # bounded frontmatter candidates
```

Search is capped at 100 results and has no pagination flag. Reaching the cap
means coverage is incomplete. For a requested full audit, use a host-supported
complete file inventory or read-only vault-scoped filesystem enumeration,
excluding nested demo vaults and system/generated directories outside scope.
Report the inspected count and any omissions; a sample cannot establish that
all wiki pages are consistent.

## Out of scope

- Do not generate `.AI.md` for captures, daily / weekly / monthly notes, or
  any individual source note that isn't a topic / index.
- Do not rewrite source notes during ingestion.
- Do not invent new `type:` values beyond `wiki/主题` without an explicit user
  decision.
