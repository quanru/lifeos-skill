# Template-to-Template Migration

Use this when the detected source profile differs from the requested target
profile, or when the user says switch, upgrade, convert, or migrate templates.
This is an agent-led, reviewed migration—not a template toggle.

Supported here: Memos, IPO / Topic-only, GTD, and PARA. For OPC, load the
separate `opc` skill and normally migrate selected material into an OPC Blank
Vault.

## Contents

- [Migration contract](#migration-contract)
- [Create a migration record](#create-a-migration-record)
- [Inspect and preview](#inspect-and-preview)
- [Merge settings by field](#merge-settings-by-field)
- [Migrate Agent Files](#migrate-agent-files-without-losing-user-context)
- [Apply structure before moving content](#apply-structure-before-moving-content)
- [Classify by meaning](#classify-by-meaning-not-source-folder)
- [Exclude system and generated material](#exclude-system-and-generated-material)
- [Links and attachments](#links-and-attachments)
- [Execute in bounded batches](#execute-in-bounded-batches)
- [Verify before changing the profile manifest](#verify-before-changing-the-profile-manifest)
- [Recovery and reversal](#recovery-and-reversal)

## Migration contract

Before writing, establish these facts:

1. **Source profile** — use the profile reported by `onboard inspect --json`.
   If it is `custom` or `unknown`, stop calling the operation a profile
   conversion; inventory the actual folders and settings first.
2. **Target profile** — choose one model only. Topic-only maps to IPO.
3. **Scope** — ask one consequential question and record one of:
   - `new-content-only`: add the target workflow; leave history where it is;
   - `selected-history` (default): migrate only material that creates immediate
     retrieval or execution value;
   - `full-history`: keep batching until every eligible item is moved,
     explicitly retained, or recorded as blocked.
4. **Recovery checkpoint** — for `full-history`, require the user to confirm a
   current vault backup, version-control checkpoint, or sync snapshot before any
   move. A classification plan is an audit trail, not a backup.

Do not ask the user to choose scope again when they already stated it.

## Create a migration record

Keep a resumable record at:

```text
.lifeos/migrations/<timestamp>-<source>-to-<target>.json
```

Use this schema:

```json
{
  "schemaVersion": 1,
  "sourceProfile": "memos",
  "targetProfile": "para",
  "scope": "selected-history",
  "status": "planned",
  "settingsChanges": [{ "key": "usePARANotes", "from": false, "to": true }],
  "classificationPlans": [],
  "moves": [],
  "conflicts": [],
  "unclassifiedCount": 0,
  "startedAt": "<ISO timestamp>"
}
```

Allowed statuses are `planned`, `structure-applied`, `content-migrating`,
`verified`, and `blocked`. Do not write the complete settings object into this
record: it may contain activation, calendar, sync, or AI credentials. Record
only reviewed template-structure fields and file movements.

## Inspect and preview

Run the normal bounded path:

```bash
npx -y @life-os/cli onboard inspect --json
npx -y @life-os/cli onboard plan profile=<target> density=<minimal|full> locale=<locale> --json
```

The JSON plan includes `conflictEntries`. A conflicting file entry retains the
target content so the agent can compare it with the current file; `onboard
apply` still never overwrites that conflict.

Show the user:

- source profile, target profile, and scope;
- directories and files that can be added safely;
- conflicting paths;
- the settings fields proposed for change;
- the target sections for `AGENTS.md`, `SOUL.md`, and `STYLE.md`;
- whether a free-form `MEMORY.md` already exists (it remains unmanaged);
- whether historical files will move in this phase.

Require explicit confirmation before applying structure or editing settings.

## Merge settings by field

Read the current `.lifeos/settings.json`. Use the target settings content from
the plan's `.lifeos/settings.json` `conflictEntries` item as a source of desired
template values, not as a replacement file.

Start from the current settings and merge only reviewed template fields:

- workflow flags such as `usePARANotes`, `usePARAAdvanced`, `useThemeNotes`, and
  `useThemeAdvanced`;
- target taxonomy paths such as capture, project, area, resource, archive,
  express, input, theme, and output paths;
- target taxonomy template paths only when the target workflow needs them.

Preserve by default:

- `periodicNotesPath`, every periodic path format, and every periodic template
  path;
- daily, project, area, theme, and habit headers;
- locale, week start, custom task statuses, and user naming conventions;
- every AI, model, activation, calendar, sync, account, and unrelated UI field;
- source-profile path fields while old folders still contain active material.

If the user explicitly wants target periodic defaults, present those fields as
a separate decision. Never leak unchanged sensitive settings in the diff or
migration record.

Use the host agent's exact file-edit capability after confirmation. If exact
editing is unavailable, stop and ask the user to make the field changes; do not
reconstruct and overwrite the complete settings file with `create overwrite`.

## Migrate Agent Files without losing user context

The target onboarding plan includes exactly three root bootstrap Agent Files:
`AGENTS.md`, `SOUL.md`, and `STYLE.md`. If any already exist, they appear in
`conflictEntries`; `onboard apply` preserves them. `MEMORY.md` is optional,
free-form, and outside template management.

After confirmation, compare each existing file with its target content:

- Keep `AGENTS.md` as the entry point. Preserve user-authored working rules and
  make sure it points to `SOUL.md`, `STYLE.md`, and `MEMORY.md`. Replace only
  the old profile operating-model section with the target profile section.
- Preserve custom identity constraints in `SOUL.md`; replace only the old
  profile identity section.
- Preserve custom voice and formatting preferences in `STYLE.md`; replace only
  the old profile expression section.
- If `MEMORY.md` exists, keep it byte-for-byte unchanged during migration.
  Change it only for a separate, explicit user request to update durable memory;
  never add profile scaffolding or impose headings.

Do not create `AGENT.md` or `CLAUDE.md`. If a file mixes generated and
user-authored text so tightly that the boundary is unclear, show a focused diff
and ask before editing it.

## Apply structure before moving content

After confirmation, run target `onboard apply`. It may create safe directories,
templates, entry pages, and missing bootstrap Agent Files while preserving
conflicts. Then apply the reviewed settings and bootstrap Agent File merges.

Keep the existing `.lifeos/template-profile.json` during structural and content
migration. Its old value makes the in-progress state visible. Update it to the
target content from `conflictEntries` only after target settings, directories,
entry points, bootstrap Agent Files, and queries have been verified.

Set the migration record to `structure-applied` before classifying history.

## Classify by meaning, not source folder

Folder names are evidence, not decisions. A PARA Project does not automatically
become a GTD Project, and an IPO Theme does not automatically become a PARA
Resource. Read enough of each item to identify its current role.

### Target IPO / Topic-only

| Meaning                                                         | Default destination |
| --------------------------------------------------------------- | ------------------- |
| Raw source, evidence, clipping, or unprocessed import           | Input               |
| Durable judgment, topic synthesis, or maintained subject page   | Themes              |
| Article, proposal, decision memo, or other intended deliverable | Output              |
| Inactive or unclassifiable legacy material                      | Archive             |

Keep Markdown tasks in their existing notes or periodic notes unless moving the
owning note is useful; IPO has no generic action folder.

### Target GTD

| Meaning                                                   | Default destination                   |
| --------------------------------------------------------- | ------------------------------------- |
| New or unclear open loop                                  | Inbox                                 |
| Executable next action, waiting-for item, or someday item | Actions, with reviewed GTD tags       |
| Multi-step outcome requiring more than one action         | Projects                              |
| Non-actionable supporting information                     | Reference                             |
| Review checklist or system review record                  | Reviews or the matching periodic note |
| Inactive material                                         | Archive                               |

Do not split tasks out of a project note merely to fill the Actions folder. The
project note remains the source of truth; action indexes may aggregate tasks.

### Target PARA

| Meaning                                        | Default destination |
| ---------------------------------------------- | ------------------- |
| Newly arrived and not yet processed            | Capture             |
| Active outcome with a finish condition         | Projects            |
| Ongoing responsibility or standard to maintain | Areas               |
| Reusable reference or subject knowledge        | Resources           |
| User-authored synthesis or deliverable         | Express             |
| Inactive or unclassifiable legacy material     | Archive             |

### Target Memos

Do not use `classify-*`; Memos has no taxonomy destinations. Keep all old
folders and links. Disable or stop using the taxonomy only after confirmation,
preserve periodic notes, and route new capture to daily notes. Old folders may
be archived later in separately reviewed batches, but they are not deleted as
part of switching to Memos.

## Exclude system and generated material

Do not automatically classify:

- `.lifeos/`, `.obsidian/`, `.agents/`, plugin directories, or hidden files;
- root README / task entry pages belonging to the source workflow;
- template files and template directories;
- generated query/index pages, `.AI.md` pages, or HTML dashboards;
- migration and classification plan files.

Preserve these until the target workflow works. Regenerate target indexes,
AI Wiki pages, or dashboards from their sources instead of treating generated
output as ordinary imported knowledge. Move a system file only after a separate,
path-specific confirmation.

## Links and attachments

Before confirming a move, inspect standard Markdown links, Wikilinks, embeds,
and attachment references. The classifier rejects known unsafe moves; never
weaken or bypass that validation.

For a linked item choose one reviewed strategy:

1. **Keep in place** and create a target index note that links to it. This is the
   safest default.
2. **Move a self-contained bundle** of a note and its exclusively owned
   attachments, then update every inbound and outbound reference with exact
   edits and verify them.
3. **Defer as blocked** in the migration record when ownership or links are
   unclear.

Shared attachments remain in place. An attachment follows its primary note only
when that ownership is clear; filename and media type alone are insufficient.
Do not claim to understand binary content without an extraction tool.

## Execute in bounded batches

For `selected-history` or `full-history`, follow `references/migration.md`:

1. Produce at most 30 candidates with `onboard classify-input`.
2. Filter system/generated material.
3. Propose destinations with reason, evidence, and confidence.
4. Save the reviewed classification plan and add its path to the migration
   record.
5. Run `classify-plan`; resolve or defer every conflict.
6. Run `classify-apply` only after explicit confirmation.
7. Append successful source/destination pairs to `moves`; update conflicts and
   remaining count.
8. Repeat only while the selected scope requires it.

Set status to `content-migrating` when the first batch begins. If work stops,
leave the record resumable and report the exact next batch or conflict.

## Verify before changing the profile manifest

Do not treat folder creation as completion. Verify:

- current periodic notes still resolve to the original files;
- target directories and settings fields match;
- the target daily entry point opens or can be created;
- target task and review queries work;
- moved files exist only at the confirmed targets;
- links and attachments used by moved files still resolve;
- every in-scope item is moved, explicitly retained, or recorded as blocked;
- no secret-bearing setting was copied into a migration or classification file.

After those checks and user confirmation, update
`.lifeos/template-profile.json` to the target content from the onboarding plan,
then run:

```bash
npx -y @life-os/cli profile --json
npx -y @life-os/cli onboard verify --json
```

Set the migration record to `verified`, add `completedAt`, and report moved,
retained, blocked, and unclassified counts separately. `verified` means the
selected scope is complete; it does not imply every historical file moved when
scope was `new-content-only` or `selected-history`.

## Recovery and reversal

- Resume from the migration record and its referenced classification plans.
- Never delete a partially created target structure to simulate rollback.
- To reverse confirmed file moves, build a separate reverse plan from the
  recorded `moves`, validate it against the original profile, and ask for fresh
  confirmation.
- Revert only the recorded template settings fields. Do not overwrite the full
  settings file with a stale backup.
- If links were edited after a move, review those edits before reversing paths.

Mark the migration `blocked` only when the unresolved condition cannot be
handled safely without user input or an external state change. Otherwise leave
it in progress with a concrete next action.
