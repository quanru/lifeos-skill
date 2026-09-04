# LifeOS Skill

[English](README.md) | [简体中文](README.zh-CN.md)

A package for reading, organizing, and evolving a local Markdown knowledge base
with LifeOS. It works headlessly through `@life-os/cli`, so Obsidian or Aino
does not need to be open.

The GitHub distribution combines the latest core, today, board, onboarding, and
content workflows in one flat Skill package for broad importer compatibility.
The LifeOS CLI installs the same behavior as five focused Skills so agents can
load only the domain needed for each request.

## Use it with LifeOS

- **In Obsidian:** follow the [LifeOS Skill guide](https://lifeos.md/zh/guide/ai-integration/lifeos-skill).
- **In Aino:** follow the [Aino LifeOS Skill guide](https://aino.md/zh/guide/ai/lifeos-skill.html).

## Capabilities

- Read settings, search notes, capture ideas, manage tasks, and create daily,
  weekly, monthly, quarterly, and yearly notes with the user's real templates.
- Build a source-backed weekly review from completed tasks, open work, weekly
  bullets, and recently changed files instead of guessing from due dates.
- Initialize an empty folder or take over an existing Markdown knowledge base;
  choose Memos, IPO / Topic-only, GTD, or PARA, then preview every write.
- Migrate between LifeOS templates in reviewed, resumable batches while
  preserving custom settings, links, attachments, and user-authored rules.
- Add tags and other properties to PDF, image, audio, video, Office, and other
  non-Markdown attachments through hidden sibling metadata files.
- Maintain topic-level `.AI.md` pages for LifeOS AI Wiki and generate standalone
  sibling HTML dashboards for projects, areas, resources, and other themes.
- Create `AGENTS.md`, `SOUL.md`, and `STYLE.md` when onboarding a knowledge base.
  `MEMORY.md` stays optional and is only created or edited after an explicit
  request to remember something.
- Use native, confirmation-gated tools in Aino Mobile. Mobile users do not need
  Node.js or shell commands.

## Installation

To install the complete five-Skill bundle into the current LifeOS vault:

```bash
npx -y @life-os/cli@latest skill install
```

To install the flat GitHub package:

```bash
npx skills add quanru/lifeos-skill
```

For a project-local Codex installation:

```bash
npx skills add quanru/lifeos-skill -a codex
```

## Try it

Ask your agent in natural language:

```text
What is on my LifeOS task list today?
```

```text
Review this week using completed tasks and recently changed notes.
```

```text
Help me set up or take over this knowledge base. Show the plan before writing.
```

```text
Add the tag #contract and status "signed" to Assets/Agreement.pdf.
```

```text
Generate an HTML dashboard beside my quarterly-planning project note.
```

## Update

Use the LifeOS CLI to inspect and atomically update all five Skills:

```bash
npx -y @life-os/cli skill status
npx -y @life-os/cli skill install
```

Locally modified managed files are backed up per Skill before replacement.
Legacy single-Skill installs are migrated, obsolete managed files are removed
after backup, and a newer installed bundle is never downgraded.

## Requirements

- A local folder containing Markdown notes, or an empty folder to initialize
- Node.js 18+ for CLI-based agents
- No Node.js requirement when the skill runs through Aino Mobile native tools

## Safety model

Onboarding and migrations inspect and preview before writing. Files move only
after explicit confirmation and validation of path boundaries, name collisions,
Markdown links, Wikilinks, and attachment references. Binary attachment content
is not treated as understood unless a separate tool actually extracts it.

## License

MIT
