# PARA Template Profile

Use this reference when `lifeos profile` returns `para`, or when the vault is
clearly organised around projects / areas / resources / archives.

## Model

The LifeOS PARA profile keeps capture and expression around the core PARA model:

- **Capture / 捕获**: newly arrived material that has not been processed yet.
- **Projects / 项目**: active outcomes with deadlines or completion criteria.
- **Areas / 领域**: ongoing responsibilities and standards.
- **Resources / 资源**: reusable reference material and topics of interest.
- **Archives / 存档 / 归档**: inactive or completed material.
- **Express / 表达**: the user's own drafts, synthesis, and output.
- **Periodic notes / 周期笔记**: time-based capture, planning and review.

Default English structure:

```text
-1. Capture
0. Periodic Notes
1. Projects
2. Areas
3. Resources
4. Archive
5. Express
```

Do not create a generic Inbox for PARA. During migration, recommend Archive for
old material that cannot be classified reliably. Reserve Capture for new,
unprocessed material.

Theme tags connect periodic capture back to project / area / resource index
notes. Prefer the configured paths from `lifeos config` over hard-coded folder
names.

## Source Workflow

1. Run `lifeos config` and `lifeos profile`.
2. Locate the project / area / resource / archive index note.
3. Read the source note, sibling `.AI.md` if present, same-folder material and
   relevant recent periodic notes.
4. Preserve existing useful dashboard / AI Wiki structure when refreshing.

## Dashboard Focus

For PARA theme dashboards, use `references/theme-dashboard.md` and emphasise:

- theme identity and tag;
- current state and key judgment;
- indexed tasks, fleeting notes and files;
- next actions / 下一步行动;
- risks and blockers;
- material map and recent activity.

Adjust focus by category:

- Project: outcome, deadline, open work, blocker and next milestone.
- Area: standard, cadence, drift, recurring risk and next review point.
- Resource: knowledge structure, unread material and reuse potential.
- Archive: historical conclusion, reusable assets and recovery condition.

## Do Not

- Do not treat one-off captures or daily notes as theme dashboards unless the
  user explicitly asks.
- Do not invent theme tags, deadlines, task counts or progress scores.
- Do not create a separate recommendations section outside `Next actions` /
  `下一步行动`.
