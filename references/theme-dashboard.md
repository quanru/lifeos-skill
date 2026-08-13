# LifeOS Theme Dashboard — HTML generation rules

Use this reference when the user asks to generate, refresh, rebuild or view a
theme dashboard / 主题 dashboard / 主题看板 / 主题仪表盘 / 主题驾驶舱 for a LifeOS
topic, project, area, resource or archive.

## Purpose

A theme dashboard is a sibling standalone HTML cockpit for a LifeOS theme/index
note. It is not a Markdown export, not an `.AI.md` page, and not a landing page.

Its job is to make the theme note operational:

- expose the theme tag that uniquely identifies the topic;
- surface indexed tasks, fleeting notes and files behind that tag;
- synthesize current state, key judgment, next actions, risks and material
  evidence;
- help the user decide what to do with this theme next.

The dashboard must stay grounded in source notes. Do not invent metrics,
deadlines, task counts, health scores or conclusions that are not supported by
the theme note, `.AI.md`, indexed lists or source material.

## Theme Note Model

Before generating HTML, treat the source as a LifeOS theme note, not as a generic
Markdown document.

- A theme note is a basic LifeOS unit. A life/work topic, project, area,
  resource or archive can be a theme.
- A theme tag is the unique ID of a theme. It comes from the source note
  frontmatter `tags` field. Show the main theme tag near the top of the
  dashboard. If no tag exists, show it as a missing signal instead of guessing.
- A theme index file can use either index naming mode:
  - `folderName`: `<folder>/<folder>.md`
  - `readme`: `<folder>/<leaf-tag>.README.md`
- Theme index notes aggregate three core advanced lists:
  - `TaskListByTag`: tasks across the vault with the theme tag;
  - `BulletListByTag`: short bullets / fleeting notes with the theme tag;
  - `FileListByTag`: files / notes associated with the theme tag.
- Other tag-indexed lists can exist and should be used when present:
  `ThemeListByTag`, `ProjectListByTag`, `AreaListByTag`,
  `ResourceListByTag`, `ArchiveListByTag`.
- Tags and folders have different jobs:
  - use tags for short tasks and fleeting notes captured in periodic notes;
  - use the theme folder for medium/long-form material such as research notes,
    meeting notes, drafts, plans and reference documents.
- Periodic notes provide time-based records. Theme notes provide the
  topic-based workspace. A good dashboard shows both the indexed signals and the
  durable material that explain them.

Do not default to generating a theme dashboard from a capture, daily note,
weekly note, meeting note, pasted article or other one-off source. If the user
points at one of those files, ask whether it should be treated as the source
theme/index note before writing HTML.

## Output Contract

Generate a complete standalone `.html` file with:

- inline CSS in `<style>`;
- no external CDN, remote font, remote image or analytics dependency;
- no JavaScript unless there is a concrete local interaction such as filtering
  or toggling sections;
- semantic HTML sections with readable class names;
- responsive layout: dense, scan-friendly desktop grid and readable one-column
  mobile layout;
- metadata that shows generated date, source note, theme tag, theme type and
  appearance mode;
- a dedicated **Next actions / 下一步行动** section.

Do not edit the source `.md` note, `.AI.md` page or theme folder unless the user
explicitly asks for source-note changes. Do not create `.Dashboard.md`; the
dashboard is `.html`.

## Path Rule

The dashboard is a sibling file derived from the source theme/index note by
replacing the Markdown extension with `.html`:

```text
<dir>/<basename>.md       -> <dir>/<basename>.html
<dir>/<basename>.markdown -> <dir>/<basename>.html
```

Examples:

```text
4 资源/学日语/学日语.md       -> 4 资源/学日语/学日语.html
1 项目/季度OKR/季度OKR.md   -> 1 项目/季度OKR/季度OKR.html
1 项目/X/X.README.md       -> 1 项目/X/X.README.html
```

If the user starts from a sibling `.AI.md` page, derive the dashboard path from
that page's `source:` note when available. If there is no explicit source, only
fall back to removing `.AI` when the matching theme/index note exists.

If the topic source is ambiguous, ask the user to choose the source note before
writing.

## Theme Mode

Match the vault's current Obsidian or Aino appearance instead of choosing dark or
light arbitrarily.

Resolution order:

1. Read `.obsidian/appearance.json` when present. Use its `theme` field:
   - `system` or missing: generate CSS that follows `prefers-color-scheme`;
   - dark mode value: render dark by default and include a light fallback;
   - light mode value: render light by default and include a dark fallback.
2. If desktop Obsidian config is missing, check `.obsidian-mobile/appearance.json`.
3. If Aino exposes an explicit appearance/color-scheme setting, prefer it for
   dashboards generated from Aino context.
4. If no app setting is available, use `prefers-color-scheme` and document that
   the dashboard follows the system.

Implementation rule:

- Set `color-scheme: light dark` on `:root`.
- Define semantic CSS variables for the default mode.
- Add `@media (prefers-color-scheme: dark)` or
  `@media (prefers-color-scheme: light)` variables for the alternate mode.
- Add a metadata pill such as `Theme: Obsidian system`,
  `Theme: Obsidian system (current Light)` or `Theme: Aino dark`.
- Do not make one dashboard fixed dark and another fixed light unless the source
  app setting explicitly differs.

## Source Resolution

Follow this order before writing HTML:

1. Run `npx -y @life-os/cli config` if the vault, PARA folders or index naming
   mode are unclear.
2. Run `npx -y @life-os/cli profile`. If it detects:
   - `para`, also read `references/templates/para.md`;
   - `ipo`, also read `references/templates/ipo.md`;
   - `gtd`, use `references/templates/gtd.md` instead of forcing a theme-note
     dashboard unless the user explicitly selected a theme/index note;
   - `opc`, switch to the separate `opc` skill.
3. Locate the theme/index note with `search query=<topic> type=file` if the
   exact path is not known.
4. Confirm it is a theme/index note:
   - it is inside a configured theme/PARA folder, or
   - it follows `folderName` / `readme` index naming, or
   - it has theme frontmatter tags and is clearly used as a topic index.
5. Read the source note.
6. Read the sibling `.AI.md` page if it exists. Treat `.AI.md` as a synthesis
   layer, not as a replacement for the theme tag or indexed lists.
7. If an HTML dashboard already exists, read it before overwriting and preserve
   useful manual structure unless the user explicitly asks to regenerate from
   scratch.

## Source Priority

Use source material in this order:

1. **Theme/index note frontmatter**: `tags`, title, type/category, status and
   any explicit deadline or outcome. The theme tag is the identity anchor.
2. **Theme/index note body**: goals, descriptions, decisions, open questions and
   LifeOS query blocks.
3. **LifeOS advanced list semantics**:
   - `TaskListByTag` for task signals;
   - `BulletListByTag` for fleeting note signals;
   - `FileListByTag` for file/material signals;
   - related theme/project/area/resource/archive lists when present.
4. **Sibling `.AI.md`**: summary, key judgments, material map, risks, next
   priorities. Verify against source material when possible.
5. **Same-folder notes**: durable medium/long-form material that belongs to the
   theme folder.
6. **Tagged or keyword search hits**: recent periodic notes, high-signal notes
   and related topics. Keep this bounded and relevant.
7. **Existing dashboard**: preserve useful user-authored structure, wording or
   manual sections when refreshing.

If a signal is missing, show it as missing. Do not fill empty sections with
generic advice.

## Dashboard Modules

Every dashboard must include these modules unless the user explicitly asks for a
different layout:

1. **Header / identity strip**: topic name, theme tag, PARA/theme type, source
   note, generated date and theme mode.
2. **Current state**: what is true now, based on the latest reliable evidence.
3. **Key judgment**: the most important judgment or decision framing for this
   theme.
4. **Indexed signals**: compact cards or table for tasks, fleeting notes and
   files. Use counts only when supported by actual source data; otherwise show
   `No indexed task found`, `No tagged fleeting note found`, etc.
5. **Next actions / 下一步行动**: committed tasks and candidate actions inferred
   from the source material. Each action should include priority, time horizon,
   owner if known, source link or task reference when available, and missing
   evidence when the action still needs validation.
6. **Risks and blockers**: what can derail the topic and the recommended
   response.
7. **Material map**: important notes, clusters, related themes and why they
   matter.
8. **Timeline / recent activity**: recent progress and upcoming checkpoints when
   evidence exists. If not, show a useful missing-signal note.
9. **Appendix**: compact table of source files, tags, links, tasks and other
   traceable evidence.

### Next Actions Content

Use one unified next-action section. Do not create a separate advisory panel for
agent-synthesized moves.

Next actions can include:

- tasks already present in the source material;
- concrete moves implied by the theme's state;
- candidate actions produced by agent synthesis, such as continue, pause, gather
  evidence, split the theme, convert a resource to an area/project, archive it,
  refresh the AI Wiki, or create new tasks.

Each next action should contain:

- the concrete move;
- priority or sequence;
- evidence or reason;
- time horizon or revisit point;
- owner if known;
- source link or task reference when available;
- missing information or validation method when evidence is weak.

## PARA-Specific Focus

Infer the type from the configured folder, source path, frontmatter or source
wording. If uncertain, label it `Theme` and avoid overfitting.

- **Project / 项目**: outcome, deadline, open tasks, blocked work, recent
  progress, next milestone, completion criteria.
- **Area / 领域**: responsibility, maintenance standard, cadence, drift from the
  standard, recurring risks, next review point.
- **Resource / 资源**: knowledge structure, important materials, unread or
  unprocessed sources, reusable ideas, signals that this should become an area
  or project.
- **Archive / 归档**: historical conclusion, reusable assets, why it is inactive,
  recovery conditions, what should remain searchable.
- **Generic theme / 主题**: identity, context, high-signal material, relationship
  to inputs/outputs or neighboring themes.

## Visual Design Contract

Use a quiet operational dashboard style. This is not a marketing page and should
not have hero copy, decorative orbs, bokeh blobs, stock imagery, large empty
visual sections or fake product-style embellishment.

Rules:

- Use a restrained multi-color palette with CSS variables. Avoid a one-note
  purple, beige, dark-blue or brown palette.
- Keep cards at `border-radius: 8px` or less.
- Use compact dashboard typography: readable body text, dense headings, no
  hero-sized title blocks.
- Prefer information-bearing visuals: KPI cards, status pills, progress bars,
  timelines, tables, risk severity labels and small CSS-only charts.
- Put current state, key judgment, next actions and risks high enough to be
  visible without deep scrolling.
- Keep text inside cards, buttons and pills from overflowing on mobile.
- Use whitespace to separate groups, not nested cards inside cards.
- Use clear empty states: `No source data found`, `No dated milestone found`,
  `No open task found`, `Missing theme tag`.
- Do not scale font size with viewport width. Use `clamp()` only for bounded
  title sizing when needed.

## HTML Skeleton

Adapt this skeleton to the topic. The final file must be polished and grounded
in the actual source; do not leave placeholder copy.

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>主题名 Dashboard</title>
    <style>
      :root {
        color-scheme: light dark;
        --bg: #f6f4ef;
        --panel: #fffdf8;
        --panel-soft: #f2eee4;
        --text: #20252d;
        --muted: #667085;
        --line: #d9d1c3;
        --accent: #246a8d;
        --accent-2: #1f8a70;
        --warn: #b58121;
        --bad: #c7513f;
        --good: #247a4d;
        --shadow: 0 16px 40px rgba(32, 37, 45, 0.08);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #111418;
          --panel: #1b2027;
          --panel-soft: #242b34;
          --text: #eef2f7;
          --muted: #aab3c1;
          --line: #343c49;
          --accent: #7ab7d8;
          --accent-2: #73d3b5;
          --warn: #f1c56b;
          --bad: #ff8f80;
          --good: #88d7a8;
          --shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
        }
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background:
          linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px),
          var(--bg);
        background-size: 32px 32px;
        color: var(--text);
        font-family:
          Inter,
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          sans-serif;
        line-height: 1.55;
      }
      .dashboard {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        padding: 28px 0 42px;
      }
      .topbar,
      .panel,
      .signal {
        background: color-mix(in srgb, var(--panel) 94%, transparent);
        border: 1px solid var(--line);
        border-radius: 8px;
        box-shadow: var(--shadow);
      }
      .topbar {
        padding: 22px;
      }
      .eyebrow,
      .meta,
      .label {
        color: var(--muted);
        font-size: 12px;
      }
      h1,
      h2,
      h3,
      p {
        margin: 0;
      }
      h1 {
        margin: 6px 0 10px;
        font-size: clamp(30px, 4vw, 52px);
        letter-spacing: 0;
      }
      h2 {
        font-size: 18px;
        margin-bottom: 12px;
      }
      h3 {
        font-size: 14px;
        margin-bottom: 6px;
      }
      .pills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        max-width: 100%;
        border-radius: 999px;
        padding: 4px 9px;
        border: 1px solid var(--line);
        color: var(--muted);
        font-size: 12px;
        overflow-wrap: anywhere;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 14px;
        margin-top: 14px;
      }
      .panel {
        padding: 16px;
      }
      .span-3 {
        grid-column: span 3;
      }
      .span-4 {
        grid-column: span 4;
      }
      .span-6 {
        grid-column: span 6;
      }
      .span-8 {
        grid-column: span 8;
      }
      .span-12 {
        grid-column: span 12;
      }
      .signals {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }
      .signal {
        padding: 12px;
        box-shadow: none;
      }
      .metric {
        font-size: 28px;
        font-weight: 750;
      }
      .list {
        display: grid;
        gap: 10px;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .item {
        border-left: 3px solid var(--accent);
        padding: 10px 10px 10px 12px;
        background: var(--panel-soft);
        border-radius: 6px;
      }
      .item.risk {
        border-left-color: var(--bad);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
      }
      th,
      td {
        padding: 10px 8px;
        border-bottom: 1px solid var(--line);
        text-align: left;
        vertical-align: top;
      }
      th {
        color: var(--muted);
        font-size: 12px;
        font-weight: 650;
      }
      @media (max-width: 760px) {
        .dashboard {
          width: min(100% - 20px, 680px);
          padding-top: 16px;
        }
        .grid,
        .signals {
          grid-template-columns: 1fr;
        }
        .span-3,
        .span-4,
        .span-6,
        .span-8,
        .span-12 {
          grid-column: 1;
        }
        table {
          display: block;
          overflow-x: auto;
        }
      }
    </style>
  </head>
  <body>
    <main class="dashboard">
      <section class="topbar">
        <div class="eyebrow">LifeOS Theme Dashboard</div>
        <h1>主题名</h1>
        <p>一句话说明这个主题当前为什么重要，以及 dashboard 帮用户判断什么。</p>
        <div class="pills" aria-label="Theme metadata">
          <span class="pill">Tag: #主题标签</span>
          <span class="pill">Type: Project / Area / Resource / Archive</span>
          <span class="pill">Source: 主题索引.md</span>
          <span class="pill">Theme: Obsidian system</span>
          <span class="pill">Generated: 2026-06-30</span>
        </div>
      </section>

      <section class="grid" aria-label="Dashboard overview">
        <article class="panel span-8">
          <h2>当前状态</h2>
          <p>基于主题索引、AI Wiki、任务/闪念/文件索引和同目录材料，总结当前状态。</p>
        </article>

        <article class="panel span-4">
          <h2>关键判断</h2>
          <p>当前最重要的判断或决策框架。没有证据时明确写缺少什么。</p>
        </article>

        <article class="panel span-12">
          <h2>索引信号</h2>
          <div class="signals">
            <div class="signal">
              <div class="label">TaskListByTag</div>
              <div class="metric">0</div>
              <p class="meta">No indexed task found</p>
            </div>
            <div class="signal">
              <div class="label">BulletListByTag</div>
              <div class="metric">0</div>
              <p class="meta">No tagged fleeting note found</p>
            </div>
            <div class="signal">
              <div class="label">FileListByTag</div>
              <div class="metric">0</div>
              <p class="meta">No tagged file found</p>
            </div>
          </div>
        </article>

        <article class="panel span-6">
          <h2>下一步行动</h2>
          <ul class="list">
            <li class="item">
              <strong>[P1] 具体行动</strong>
              <p class="meta">时间范围 · 负责人或来源 · 相关任务/笔记链接</p>
            </li>
            <li class="item">
              <strong>[P2] 候选行动</strong>
              <p class="meta">理由/证据 · 复查时机 · 缺失信息或验证方式</p>
            </li>
          </ul>
        </article>

        <article class="panel span-6">
          <h2>风险与阻塞</h2>
          <ul class="list">
            <li class="item risk">
              <strong>风险</strong>
              <p class="meta">影响 · 触发信号 · 应对方式</p>
            </li>
          </ul>
        </article>

        <article class="panel span-6">
          <h2>近期活动</h2>
          <p class="meta">No dated milestone found</p>
        </article>

        <article class="panel span-12">
          <h2>材料地图</h2>
          <table>
            <thead>
              <tr>
                <th>材料</th>
                <th>作用</th>
                <th>证据 / 路径</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>关键笔记</td>
                <td>为什么重要</td>
                <td>主题文件夹/Note.md</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </main>
  </body>
</html>
```

## Write Command

After generating the final HTML, write it to the derived sibling path:

```bash
npx -y @life-os/cli create path="4 资源/学日语/学日语.html" content="<full html>" overwrite
```

When your runtime has direct filesystem write access, writing the `.html` file
directly is acceptable for large dashboards. Keep the same vault-relative path
rule and do not write outside the vault.

## Final Checklist

Before reporting completion, verify:

- the source is a theme/index note or the user explicitly confirmed treating it
  as one;
- the theme tag is visible, or `Missing theme tag` is visible;
- the file path is `<source basename>.html`, not `.html.md`;
- README-mode paths preserve the basename, e.g. `X.README.md` -> `X.README.html`;
- the dashboard opens as standalone HTML;
- no external network dependencies are present;
- theme mode follows Obsidian/Aino config, or `prefers-color-scheme` when the
  app config says `system`;
- top sections contain current state, key judgment, indexed signals, next
  actions and risks;
- there is no separate advisory section outside `Next actions` / `下一步行动`;
- no source `.md` note, `.AI.md` note or theme folder was modified unless
  requested;
- generated date and source note are visible;
- the design is useful on both desktop and mobile widths, with no incoherent
  overlap or horizontal overflow.
