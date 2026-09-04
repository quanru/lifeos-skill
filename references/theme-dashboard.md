# LifeOS Theme Dashboard — HTML generation rules

Use this reference when the user asks to generate, refresh, rebuild or view a
theme dashboard / 主题 dashboard / 主题看板 / 主题仪表盘 / 主题驾驶舱 for a LifeOS
topic, project, area, resource or archive.

## Contents

- [Purpose and source model](#purpose-and-source-model)
- [Output and path contract](#output-and-path-contract)
- [Theme mode](#theme-mode)
- [Source workflow](#source-workflow)
- [Required modules](#required-modules)
- [PARA-specific focus](#para-specific-focus)
- [Visual design](#visual-design)
- [Reusable skeleton](#reusable-skeleton)
- [Write and verify](#write-and-verify)

## Purpose and source model

A theme dashboard is a sibling standalone HTML cockpit for a LifeOS theme/index
note. It is not a Markdown export, `.AI.md` page, landing page or Aino mini app.
It must expose the theme's identity and help the user decide what to do next.

Ground every statement in source notes. Do not invent metrics, deadlines, task
counts, health scores or conclusions.

- The theme tag comes from the source note's `tags` Frontmatter and acts as the
  identity anchor. Show `Missing theme tag` instead of guessing one.
- Theme index files may use `folderName` (`<folder>/<folder>.md`) or `readme`
  (`<folder>/<leaf-tag>.README.md`) naming.
- `TaskListByTag`, `BulletListByTag` and `FileListByTag` provide the primary
  indexed task, fleeting-note and file signals. Use related theme/project/area/
  resource/archive lists when present.
- Tags connect short records distributed through periodic notes. The theme
  folder holds durable research, meetings, drafts, plans and reference notes.
- Periodic notes provide the time view; the theme note provides the subject
  workspace. A dashboard may show both, but the theme/index note remains its
  source.

Do not generate a theme dashboard from a capture, daily/weekly note, meeting,
pasted article or other one-off source by default. Ask the user to confirm the
source theme/index note when the target is ambiguous.

## Output and path contract

Generate one complete standalone `.html` file with:

- inline CSS and no external CDN, remote font, image, analytics or network
  dependency;
- semantic sections and readable class names;
- JavaScript only for a concrete local interaction such as filtering;
- a dense desktop grid and readable one-column mobile layout;
- generated date, source note, theme tag, theme type and appearance mode;
- one dedicated **Next actions / 下一步行动** section.

Do not edit the source `.md`, sibling `.AI.md` or theme folder unless the user
explicitly requests those changes. Do not create `.Dashboard.md`.

Derive the output by replacing the source Markdown extension:

```text
<dir>/<basename>.md       -> <dir>/<basename>.html
<dir>/<basename>.markdown -> <dir>/<basename>.html

4 资源/学日语/学日语.md     -> 4 资源/学日语/学日语.html
1 项目/X/X.README.md      -> 1 项目/X/X.README.html
```

When starting from `.AI.md`, use its `source:` note. Only remove `.AI` as a
fallback when the matching theme/index note exists.

## Theme mode

Match the current Obsidian or Aino appearance instead of choosing arbitrarily:

1. Read `.obsidian/appearance.json`; use its `theme` field.
2. If missing, check `.obsidian-mobile/appearance.json`.
3. In Aino context, prefer an explicit Aino appearance/color-scheme setting.
4. With no app setting, use `prefers-color-scheme` and say the page follows the
   system.

Set `color-scheme: light dark`, define semantic variables for the default mode
and provide alternate-mode variables with a media query. Show the resolved mode
in a metadata pill. Do not make dashboards inconsistently fixed-dark or
fixed-light unless the source app setting differs.

## Source workflow

Before writing:

1. Run `npx -y @life-os/cli config` when vault, PARA folders or index naming are
   unclear.
2. Run `profile` and load the matching template reference for PARA or IPO. For
   GTD, do not force a theme dashboard unless the user selected a theme/index
   note. For OPC, switch to the separate `opc` skill.
3. Locate the exact theme/index note with `search type=file` when needed.
4. Confirm it belongs to a configured theme/PARA folder, follows an index naming
   convention, or clearly acts as a tagged topic index.
5. Read the source note.
6. Read its sibling `.AI.md` when present. Treat it as synthesis, not a
   replacement for source tags and indexed lists.
7. Read an existing dashboard before overwriting and preserve useful manual
   structure unless the user requests full regeneration.

Use evidence in this order:

1. source Frontmatter: tag, title, type/category, status, outcome and dates;
2. source body: goals, decisions, open questions and LifeOS query blocks;
3. tag-indexed tasks, bullets, files and related-theme lists;
4. sibling `.AI.md`, verified against source material when possible;
5. same-folder durable notes;
6. bounded relevant tag/keyword hits, including periodic-note evidence;
7. useful user-authored structure from an existing dashboard.

Show missing signals explicitly instead of filling empty sections with generic
advice.

## Required modules

Include these modules unless the user asks for another layout:

1. **Identity strip**: topic, tag, type, source, date and theme mode.
2. **Current state**: what is reliably true now.
3. **Key judgment**: the decision framing that matters most.
4. **Indexed signals**: tasks, fleeting notes and files. Use counts only when
   supported; otherwise show clear empty states.
5. **Next actions / 下一步行动**: existing commitments and grounded candidate
   moves, each with priority, time horizon, owner when known, evidence/link and
   missing validation.
6. **Risks and blockers**: risk, impact, trigger signal and response.
7. **Material map**: important notes, clusters, relations and why they matter.
8. **Timeline / recent activity**: progress and checkpoints when dated evidence
   exists, otherwise a useful missing-signal state.
9. **Evidence appendix**: compact source, tag, link and task references.

Use one unified next-actions section. Do not create a separate recommendations
or advisory panel for agent-synthesized moves. Candidate actions may include
continue, pause, gather evidence, split the theme, change PARA type, archive,
refresh AI Wiki or create a task, but label weak evidence and a validation
method.

## PARA-specific focus

Infer type from configured folders, path, Frontmatter and source wording. When
uncertain, label it `Theme`.

- **Project**: outcome, deadline, open/blocked work, progress, next milestone and
  completion criteria.
- **Area**: responsibility, standard, cadence, drift, recurring risks and next
  review.
- **Resource**: knowledge structure, important/unprocessed sources, reusable
  ideas and evidence that it should become an area or project.
- **Archive**: historical conclusion, reusable assets, inactivity reason,
  recovery conditions and what remains searchable.
- **Generic theme**: identity, context, high-signal material and relations to
  neighboring inputs, outputs or themes.

## Visual design

Use a quiet operational dashboard style, not a marketing page. Avoid hero copy,
decorative orbs, bokeh, stock imagery, large empty sections and fake product
embellishment.

- Use restrained multi-color semantic CSS variables; avoid a one-note purple,
  beige, dark-blue or brown palette.
- Keep cards at `border-radius: 8px` or less.
- Use compact readable typography and information-bearing visuals such as KPI
  cards, status pills, bars, timelines, tables and severity labels.
- Keep current state, judgment, next actions and risks visible without deep
  scrolling.
- Prevent overflow in cards, buttons and pills; use whitespace instead of cards
  nested inside cards.
- Use clear empty states: `No source data found`, `No dated milestone found`,
  `No open task found` and `Missing theme tag`.
- Do not scale body fonts with viewport width. Use bounded `clamp()` only where
  useful for titles.

## Reusable skeleton

Start from [`../assets/theme-dashboard-skeleton.html`](../assets/theme-dashboard-skeleton.html)
when a baseline is useful. Read or copy the asset without loading its full HTML
into the general LifeOS workflow. Rewrite its placeholder content and adapt the
information architecture, colors and modules to the actual source; the skeleton
is not a fixed visual template.

## Write and verify

Write the completed page to the derived sibling path:

```bash
npx -y @life-os/cli create path="4 资源/学日语/学日语.html" content="<full html>" overwrite
```

Direct filesystem writing is acceptable for large dashboards when the runtime
has safe vault-scoped access. Preserve the same path rule.

Before reporting completion, verify:

- the source is a confirmed theme/index note;
- the theme tag or `Missing theme tag` is visible;
- the output is `<source basename>.html`, including README-mode basenames;
- the page opens standalone with no network dependency;
- appearance follows the app setting or `prefers-color-scheme`;
- current state, judgment, signals, next actions and risks appear near the top;
- there is no separate advisory section outside Next actions;
- no source `.md`, `.AI.md` or folder content changed unless requested;
- generated date and source note are visible;
- desktop and mobile layouts have no incoherent overlap or horizontal overflow.
