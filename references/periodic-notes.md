# Periodic notes and reviews

Use this reference for daily capture, weekly/monthly/quarterly/yearly notes,
time-based tasks, section-aware appends and reviews.

## Resolve before writing

Never construct a periodic-note path by hand. Start with the period resolver:

```bash
npx -y @life-os/cli daily
npx -y @life-os/cli weekly date=2026-08-13
```

For daily notes, the CLI honors Obsidian Daily Notes `folder`, `format` and
`template` settings before LifeOS fallbacks. Other periods use the configured
LifeOS base path, format and template. Locale-sensitive weekday and month tokens
follow `locale=` or the system locale.

Use `<period>:create` to render a missing note from its configured template.
`<period>:append` creates the note from that template when it is missing. The
shared renderer expands LifeOS date/conditional/snapshot variables and preserves
unknown LifeOS query blocks for the plugin or Aino to render.

## Capture into the correct section

1. Resolve the target with `daily`, `weekly`, `monthly`, `quarterly` or
   `yearly`; pass `date=YYYY-MM-DD` for another date.
2. Read the note or a recent note of the same type when the section name is not
   already known.
3. Append with `section=<header>` so content lands at the end of that section,
   before the next heading. The CLI creates the section only when absent.
4. For daily records, use `- HH:mm 内容` unless a tag association is already
   authorized. Use the environment's local time.
5. Lightly polish the user's wording while preserving facts, stance, emotion
   and first-person voice. Keep exact text when they request 原文 / 逐字 / 原样 /
   摘抄 / verbatim.
6. Verify the echoed path or structured result before reporting completion.

Example:

```bash
npx -y @life-os/cli daily:append section="日常记录" content="- 14:30 记录一个新想法"
```

Do not infer a project/theme tag from nearby context. Follow the association
rules in `../../lifeos/SKILL.md`; an unconfirmed candidate tag is a follow-up after the
requested capture succeeds, not part of the initial write.

## Reviews and time-based task queries

Use the single weekly-review bundle instead of manually combining incompatible
date semantics:

```bash
npx -y @life-os/cli review:weekly --json
```

It resolves the configured week and returns the weekly note, tasks completed by
completion time, open/due tasks, weekly bullets and recent files. Show the
source-backed review first; append a synthesized review only after explicit
confirmation.

For a morning check, query open work before capturing the plan:

```bash
npx -y @life-os/cli tasks due=today --json
npx -y @life-os/cli tasks due=overdue --json
npx -y @life-os/cli daily:append section="日常记录" content="- 08:30 今天先处理 ..."
```

`due=` filters task due dates. It does not answer what was completed during a
period. Use `tasks done completed=this-week` or `review:weekly` for completion
evidence.

## Period roles

- Yearly / quarterly: direction, goals and longer-horizon review.
- Monthly / weekly: nearer-term plans, milestones and task review.
- Daily: capture, tasks, thoughts and time records.

When the request is primarily about a durable subject rather than a time period,
route it to the theme note workflow in
`../../lifeos-board/references/theme-notes.md`.
