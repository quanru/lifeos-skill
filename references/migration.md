# Existing Folder and Material Migration

Use this after a template has been previewed or applied and the workspace
contains existing notes, pasted text, or scattered attachments.

If those files already belong to a different LifeOS template, read
`references/template-migration.md` first. It defines migration scope, settings
merging, semantic mappings, system-file exclusions, recovery, and completion.
This file supplies the bounded classification mechanics used inside that larger
workflow.

Memos has no semantic destination folders, so do not run classification with
`profile=memos`. Existing daily notes can remain where they are. If the user
wants to organize historical material, first choose IPO, GTD, or PARA and
preview that target structure. For Memos -> IPO / GTD / PARA upgrades, preserve
the periodic-note directory and add the target taxonomy; do not move old daily
notes. For OPC, switch to the separate `opc` skill and normally migrate into an
OPC Blank Vault.

## Safety contract

- Inventory and semantic classification are separate steps.
- The agent proposes meaning; the service validates paths, collisions, and links.
- Show destination, reason, evidence, and confidence for every item.
- Require explicit user confirmation before moving any file.
- Keep uncertain files in place until reviewed. For old material that the user
  wants out of the way, recommend the template's Archive directory.
- Never overwrite a same-named target.

## Build a bounded batch

```bash
npx -y @life-os/cli onboard classify-input profile=para locale=en limit=30 --json
```

Already managed template directories are excluded. Markdown previews are
bounded. Attachments expose path, filename, size, and media type; binary contents
are not extracted.

For Markdown, use filename, path, frontmatter, preview, and link context. For
images, PDF, DOC, PPT, audio, or video, use only filename, path, media type, and
adjacent Markdown references unless a separate extraction tool supplied content.

## Propose destinations

Use `high`, `medium`, or `low` confidence:

- **High**: explicit frontmatter, folder semantics, or clear content.
- **Medium**: strong filename and contextual evidence.
- **Low**: media type or weak naming only.

Keep classifications faithful to the selected profile. In PARA, distinguish:

- active outcome -> Projects;
- ongoing responsibility -> Areas;
- reusable reference -> Resources;
- newly arrived and unprocessed -> Capture;
- user-created draft or synthesis -> Express;
- inactive or unclassifiable legacy material -> Archive.

## Save and validate the reviewed plan

After the user reviews a batch, save only their decisions under
`.lifeos/classification-plans/<timestamp>.json`:

```json
{
  "root": ".",
  "profile": "para",
  "locale": "en",
  "suggestions": [
    {
      "source": "old-material.zip",
      "destinationDirectory": "4. Archive",
      "confidence": "low",
      "reason": "Inactive legacy material with no reliable topic evidence",
      "evidence": ["filename", "media-type"],
      "confirmed": true
    }
  ]
}
```

Then validate without moving:

```bash
npx -y @life-os/cli onboard classify-plan file=.lifeos/classification-plans/<timestamp>.json --json
```

Resolve or skip every path escape, invalid destination, missing source, target
collision, or unsafe-link warning. Do not weaken validation to make a batch pass.

## Apply the confirmed safe subset

```bash
npx -y @life-os/cli onboard classify-apply file=.lifeos/classification-plans/<timestamp>.json --json
```

Report moved, unconfirmed, already-applied, and conflicted items separately.
Repeat with the next bounded batch. Do not claim migration is complete while
unclassified items remain.

## Pasted text

Ask whether pasted text is raw source, durable synthesis, or an intended output.
Create a Markdown note in the matching directory and preserve source attribution
when provided. Do not place every paste in Capture: old unclassifiable imports
belong in Archive, while original writing belongs in Express or Output.
