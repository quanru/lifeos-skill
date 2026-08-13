# Template Selection

Read this before recommending a structure. Prefer the simplest model that
matches how the user retrieves and advances work.

Start from the user's current bottleneck, not from the most complete template.
If they do not yet have a stable capture habit, recommend Memos instead of PARA.

Present templates in this default order, from easiest to hardest:

```text
Memos -> IPO -> GTD -> PARA -> OPC
```

This is a complexity ladder, not a mandatory migration route. A user with a
clear bottleneck may skip directly to the matching template.

## Memos

Choose Memos when the first need is frictionless chronological capture: daily
bullets, tasks, and periodic review without a theme taxonomy.

```text
0. Periodic Notes
```

Memos is the lowest-maintenance starting point and is especially suitable for
people coming from Logseq, flomo, or usememos. It is not a dead end. Existing
daily notes stay in place when the user later adds IPO, GTD, or PARA folders.
Use `density=full` when the user wants weekly, monthly, quarterly, and yearly
review queries immediately; `minimal` creates only the empty daily-record
template.

## IPO

Choose IPO when the user describes a pipeline from source material through
interpretation to published or delivered output.

Also present IPO as **Topic-only mode** when the user does not want to learn or
choose a formal organization method and simply wants to organize knowledge by
topic. Topic-only is a user-facing name for IPO, not a separate profile or
directory structure. If the user says "just organize it by topic," select IPO.

```text
0. Periodic Notes
1. Input
2. Themes
3. Output
4. Archive
```

Put raw evidence in Input, durable synthesis in Themes, deliverables in Output,
and inactive or unclassifiable legacy material in Archive.

## GTD

Choose GTD when the main problem is trusted action management: clarifying new
items, identifying next actions, tracking projects, and reviewing the system.

```text
0. Periodic Notes
1. Inbox
2. Actions
3. Projects
4. Reference
5. Reviews
6. Archive
```

Inbox is a GTD method stage, not a universal LifeOS folder. Use it for new,
unclarified items. Use Archive for inactive or unclassifiable legacy material.

## PARA

Choose PARA when the user thinks in active outcomes, ongoing responsibilities,
reusable topics, and inactive material.

```text
-1. Capture
0. Periodic Notes
1. Projects
2. Areas
3. Resources
4. Archive
5. Express
```

- Capture is for newly arrived, unprocessed material.
- Express is for the user's own drafts, synthesis, and output.
- Archive is the fallback for old imported material that cannot be classified
  reliably; do not misuse Capture as a generic migration dump.

## OPC

Choose OPC for a one-person company with explicit input, output, department,
CEO cockpit, memory, and reusable-asset workflows. Load the separate `opc`
skill; do not approximate OPC with PARA onboarding.

## Decision shortcut

- “I just need to write things down every day.” -> Memos.
- “What input becomes which output?” -> IPO.
- “I only want to organize things by topic.” -> Topic-only mode (IPO).
- “What is the next physical action?” -> GTD.
- “What outcome or responsibility does this support?” -> PARA.
- “How does my one-person company operate?” -> OPC.

When two models fit, recommend one and explain the closest alternative. Do not
create a hybrid directory tree during onboarding.

## Complexity and upgrade path

Use this order when the user is unsure:

1. No stable capture habit -> Memos.
2. Source material must become synthesis or deliverables -> IPO.
3. Trusted actions and follow-ups are the bottleneck -> GTD.
4. Projects, ongoing responsibilities, and reusable knowledge all matter -> PARA.
5. A real one-person business needs departments and a CEO cockpit -> OPC.

Templates are not switchable skins. They share Markdown and periodic notes, but
their folders and semantics differ:

For an actual conversion, follow `references/template-migration.md`; the rules
below describe routing, not a complete execution plan.

- Memos -> IPO / GTD / PARA is additive: keep periodic notes, preview the target
  structure, then add folders and settings. Do not move old daily notes.
- IPO / GTD / PARA conversions require semantic reclassification. Never present
  them as a settings toggle.
- Any profile -> OPC should normally start from OPC Blank Vault and migrate
  selected material under the separate `opc` skill.
- Moving back to Memos means stopping use of the taxonomy, not deleting its old
  folders. Preserve links and history.

Never copy a Blank Vault's `.lifeos/settings.json` over an existing vault. It
would overwrite custom paths and settings. Inspect, preview, and apply only the
needed target structure.
