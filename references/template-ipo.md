# IPO Template Profile

Use this reference when `lifeos profile` returns `ipo`, or when the vault is
organised around Input -> Theme -> Output.

## Model

IPO treats knowledge work as a production line:

- **Input / 输入**: raw material, clips, feedback, meeting notes and references.
- **Theme / 主题**: processing layer where material is interpreted, clustered and
  turned into judgment.
- **Output / 输出**: shipped or shippable artifacts such as articles, proposals,
  scripts, course material, documentation or product copy.
- **Archive / 归档**: inactive or unclassifiable legacy material that should
  remain searchable without polluting the active pipeline.

Default English structure:

```text
0. Periodic Notes
1. Input
2. Themes
3. Output
4. Archive
```

The theme note is the operating center. It should explain how input evidence
supports judgments and which outputs can be produced next.

## Source Workflow

1. Run `lifeos config` and `lifeos profile`.
2. Read the theme/index note under the configured theme folder.
3. Read linked or tagged input material that feeds the theme.
4. Read output notes that already reference the theme.
5. Read sibling `.AI.md` and existing HTML dashboard when present.

Keep source gathering bounded: prefer linked files, theme tags and same-folder
material over broad keyword sweeps.

## Dashboard Focus

Use `../../lifeos-content/references/theme-dashboard.md` for the HTML path and visual contract, then
shape the modules around the IPO flow:

- input queue: important raw materials and their source;
- processing state: what has been distilled, what still needs judgment;
- key judgments: durable interpretations produced by the theme;
- output candidates: concrete pieces that can be drafted or shipped;
- next actions / 下一步行动: gather, distill, outline, draft, publish or archive;
- risks: stale input, weak evidence, unclear audience, blocked output path;
- material lineage: input -> theme judgment -> output.

## Do Not

- Do not convert raw input directly into finished output without showing the
  theme-level judgment.
- Do not treat the input folder as a permanent topic workspace.
- Do not use Input as a generic dump for old imports; use Archive when their
  role in the pipeline cannot be established.
- Do not invent audience signals, publication dates or output status.
