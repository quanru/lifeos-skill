# Non-Markdown Attachment Frontmatter

Use this reference when the user asks to tag or set properties on a PDF, image,
audio, video, Office document, HTML file, or another non-Markdown attachment.

## Protocol

Derive the hidden metadata Markdown path from the exact attachment path:

```text
Assets/合同.pdf -> Assets/.合同.pdf.md
Media/访谈.mp3 -> Media/.访谈.mp3.md
```

Associate the two files only through the same directory and complete filename.
Do not write an `attachment` field, wikilink, body embed, UUID, or content hash.

Create a Frontmatter-only file:

```yaml
---
aino-type: attachment-card
aino-version: 1
tags:
  - 客户/acme
status: 已签署
owner: 法务
---
```

Reserve `aino-type` and `aino-version` for the system. Permit any other
Frontmatter property. Treat a missing `tags` property as an empty tag list.

## Safe Write Workflow

1. Resolve one exact vault-relative non-Markdown attachment path. Do not mutate
   a result selected only by a loose or ambiguous filename.
2. Confirm that the attachment exists and is not a Markdown file.
3. Derive `.<complete attachment filename>.md` in the same directory.
4. Read that exact metadata path before writing:

   ```bash
   npx -y @life-os/cli read path="Assets/.合同.pdf.md" --json
   ```

5. If the hidden metadata file is missing, create it only after the user
   requested a property change. Include both reserved fields and the requested
   user properties.
6. If a file already exists at the hidden metadata path, require
   `aino-type: attachment-card`, a supported `aino-version`, valid YAML, and the
   corresponding sibling attachment. Otherwise stop without overwriting.
7. Merge only the requested changes. Preserve unknown keys, value types, key
   spelling, and any unexpected body text verbatim. Never silently normalize or
   delete data.
8. For a generic “add this tag” request, add and de-duplicate tags without
   replacing unrelated tags. Remove or replace tags only when explicitly asked.
9. Write the complete merged document back to the exact card path:

   ```bash
   npx -y @life-os/cli create path="Assets/.合同.pdf.md" content="<完整合并后的 Frontmatter>" overwrite
   ```

   Use `overwrite` only after step 6 validates an existing card. Omit it when
   creating a missing card so a concurrent file cannot be replaced.

10. Read the frontmatter again and verify the reserved fields and requested properties.

## Hidden Files

- Keep the leading `.` on every platform.
- On Windows, set the filesystem Hidden attribute after creating, moving, or
  renaming the hidden metadata file:

  ```powershell
  attrib +H "C:\path\to\vault\Assets\.合同.pdf.md"
  ```

- If setting the Windows attribute fails, keep the hidden metadata file and report that it may
  remain visible until Aino repairs the attribute. Do not claim full success
  without surfacing the warning.

## Moves and Renames

Treat the attachment and its hidden metadata Markdown file as one pair. Rename or move the
metadata file to the newly derived sibling path without changing its
Frontmatter. Preflight both destinations and never overwrite a collision. If the
available tool cannot perform a safe paired operation, stop and ask the user to
use Aino.

## Aino Mobile

Mobile supports syncing, hiding, recognizing, querying, reading, creating, and
editing non-Markdown attachment frontmatter when `lifeos_get_vault_info` reports
`lifeos_read_attachment_card` and `lifeos_update_attachment_card`.

Use `lifeos_read_attachment_card` for the exact non-Markdown attachment path,
merge only the requested Frontmatter changes, then call
`lifeos_update_attachment_card` with the complete user-owned YAML. That native
write tool prepares a hidden-frontmatter preview and still requires the user's
explicit confirmation before commit. Do not emulate the operation with ordinary
visible-Markdown tools.
