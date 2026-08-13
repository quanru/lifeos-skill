# Memos Template

Use this reference when `lifeos profile` returns `memos`, or when the user wants
Logseq-, flomo-, or usememos-style chronological capture without PARA or themes.

## Structure

```text
0. Periodic Notes
└── Templates
    ├── Daily.md
    ├── Weekly.md
    ├── Monthly.md
    ├── Quarterly.md
    └── Yearly.md
```

The daily template contains only the configured Daily Record heading. Write
ordinary bullets and Markdown tasks directly below it. Full density keeps four
review queries in longer-period templates:

- `TaskDueListByTime`
- `TaskRecordListByTime`
- `BulletRecordListByTime`
- `TaskDoneListByTime`

Do not add project, area, or theme snapshots while the vault remains Memos.

## Operating loop

1. Capture bullets and tasks in today's daily note.
2. Use task queries for open and completed work.
3. Review the recorded bullets and tasks weekly.
4. Add a taxonomy only after retrieval by time is no longer enough.

## Upgrade without losing history

Memos is a foundation, not a temporary format. IPO, GTD, and PARA use the same
Markdown tasks and periodic notes, so old daily notes stay in place.

Read `references/template-migration.md` before changing an existing Memos vault.
It defines scope, settings-field merging, migration records, and verification.

1. Run `onboard inspect --json`.
2. Choose one target based on the current bottleneck.
3. Preview `onboard plan profile=<ipo|gtd|para> ... --json`.
4. Explain every conflict, especially `.lifeos/settings.json` and README.
5. Do not apply over existing conflicting settings. Merge only the reviewed
   target paths and flags, preserving the existing periodic-note path and custom
   templates.
6. Begin classifying new material under the target model. Move old material only
   in confirmed batches when that creates real retrieval value.

For OPC, use the separate `opc` skill and normally migrate selected material to
an OPC Blank Vault. Do not approximate OPC by adding folders to Memos.

## Moving back to Memos

Stop creating new theme/action material and return capture to daily notes. Keep
the old folders in place or archive them; deleting them can break links and
historical queries. A template change is a workflow migration, not a reversible
UI toggle.
