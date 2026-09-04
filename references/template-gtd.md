# GTD Template Profile

Use this reference when `lifeos profile` returns `gtd`, or when the vault is
organised around inbox, next actions, waiting, someday and review lists.

## Model

GTD is an action-management profile, not primarily a theme-note profile:

- **Inbox / 收件箱**: unclarified input.
- **Next Actions / 下一步行动**: concrete executable tasks.
- **Waiting For / 等待事项**: delegated or externally blocked tasks.
- **Someday Maybe / 将来可能**: deferred ideas and options.
- **Projects / 项目**: multi-step outcomes.
- **Review / 复盘**: trusted-system maintenance.
- **Reference / 参考**: non-actionable support material.
- **Archive / 归档**: inactive or unclassifiable legacy material.

Default English structure:

```text
0. Periodic Notes
1. Inbox
2. Actions
3. Projects
4. Reference
5. Reviews
6. Archive
```

Inbox is intrinsic to GTD: it contains new items waiting for clarification. It
is not a generic migration fallback.

Common tags include `#gtd/next`, `#gtd/waiting`, `#gtd/someday` and context tags
such as `#ctx/computer`. Reuse existing tag vocabulary instead of inventing a new
one.

## Source Workflow

1. Run `lifeos profile`.
2. Read `TASK.md` when present; it is usually the execution entry.
3. Read the `Actions`, `Projects`, `Reference`, `Reviews`, and `Inbox` folders,
   plus any waiting/someday lists or tags present inside them.
4. Query tasks by GTD tags and context tags.
5. Use project notes only when an action clearly belongs to a multi-step outcome.

## Dashboard Focus

For GTD HTML dashboards, do not force the theme-dashboard model unless the user
explicitly selected a theme/index note. Use the selected list note as the source
and write a sibling `.html` file:

```text
TASK.md          -> TASK.html
Next Actions.md  -> Next Actions.html
Weekly Review.md -> Weekly Review.html
```

Required modules:

- inbox state: unclarified items and oldest/stale signals;
- next actions by context;
- waiting-for items with owner and follow-up point when known;
- someday/maybe candidates that need review or pruning;
- projects with missing next actions;
- review checklist;
- next actions / 下一步行动 for maintaining the system;
- risks: stale inbox, blocked waiting items, actions without context, projects
  without next actions.

## Do Not

- Do not present GTD list dashboards as PARA theme dashboards.
- Do not invent owners, deadlines, contexts or project links.
- Do not create a separate recommendations section outside `Next actions` /
  `下一步行动`.
