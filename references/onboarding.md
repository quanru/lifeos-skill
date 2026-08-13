# Knowledge Base Onboarding

Use this workflow for an empty folder, an existing Markdown folder, a pasted
collection of notes, or a folder being taken over from another knowledge tool.
The folder does not need `.obsidian/`.

## Operating rules

- Ask one consequential question at a time.
- Inspect before recommending a template.
- Preview before writing; require explicit confirmation before every apply step.
- Preserve existing paths and attachments until the user confirms a migration batch.
- Resume from `.lifeos/onboarding.json` when onboarding was started earlier.
- Do not treat attachment inventory as content extraction.
- Use `onboard inspect --json` as the single initial inventory. Do not duplicate
  it with `ls`, `find`, `config`, `profile`, or `onboard templates` unless the
  inspection failed or a specific required fact is missing.
- Before presenting the first preview, the normal command budget is two calls:
  `onboard inspect --json`, then `onboard plan ... --json`.

## State machine

1. **Inspect**

   ```bash
   npx -y @life-os/cli onboard inspect --json
   ```

   Summarize Markdown count, attachment types, existing LifeOS metadata, Skill
   status, and detected profile. Do not dump a long file list. Run
   `onboard status --json` separately only when inspection reports an existing
   onboarding state or the user is resuming an interrupted setup.

2. **Understand the starting point**

   Determine whether the user is starting from scratch, taking over an existing
   folder, or pasting/importing material in batches. If this is not obvious from
   the inventory, ask only that question.

   If the inventory detects one LifeOS profile and the user requests another,
   read `references/template-migration.md` before previewing. Do not treat an
   existing profiled vault like a blank onboarding target.

3. **Choose a template**

   Read `references/template-selection.md`. Explain one recommendation and the
   closest alternative in plain language. If the user selects OPC, switch to the
   separate `opc` skill. If the user rejects formal frameworks or only wants to
   organize by topic, offer **Topic-only mode** and execute it as IPO. Do not
   create a separate profile or directory structure for this label. If the user
   already selected Topic-only, skip template discovery and go directly from
   inspection to an IPO onboarding plan. If the user has no stable capture habit
   or only wants chronological bullets and tasks, recommend Memos. Memos does not
   accept bulk classification because it has no taxonomy destinations.

4. **Choose density and language**

   Use `minimal` by default. For Memos, prefer `full` when the user wants review
   pages immediately; Memos `minimal` still includes its essential empty Daily
   template. Use the user's writing language for generated folders, starter
   notes, and root Agent Files; this does not change the English Skill files
   installed under `.agents/skills/lifeos/`.

5. **Preview**

   ```bash
   npx -y @life-os/cli onboard plan profile=para density=minimal locale=en --json
   ```

   Show created, skipped, and conflicting paths. In JSON, `conflictEntries`
   includes the target content for conflicting files so an agent can prepare a
   field-level settings diff; it does not authorize replacement. Explain
   conflicts before asking for confirmation. Never use `apply` merely because
   the plan looks safe to you.

   Every profile plan includes exactly these root bootstrap Agent Files:
   - `AGENTS.md` — entry point and working rules;
   - `SOUL.md` — assistant identity;
   - `STYLE.md` — communication style;

   `MEMORY.md` is optional and free-form. Do not create it during onboarding;
   the agent creates it on the user's first explicit remember request. Never
   template-upgrade or rewrite an existing `MEMORY.md`. The bootstrap files'
   profile-specific sections must match Memos, IPO, GTD, or PARA. Do not add
   `AGENT.md` or `CLAUDE.md`.

6. **Apply after explicit confirmation**

   ```bash
   npx -y @life-os/cli onboard apply profile=para density=minimal locale=en --json
   npx -y @life-os/cli onboard verify --json
   ```

   Report partial results honestly. Existing conflicting files are preserved;
   other safe entries may still be created. An existing `MEMORY.md` is not an
   onboarding conflict because it is not managed by the template.

7. **Continue with content**
   - For existing files or pasted material, read `references/migration.md`.
   - For a source-profile to target-profile conversion, follow
     `references/template-migration.md` and keep its migration record current.
   - For an empty folder, read `references/from-scratch.md`.

8. **Finish**

   Verify the profile, metadata, Skill, and at least one real entry point. Tell
   the user what was created, what stayed in place, and what remains unclassified.

## Recovery

- Re-run `onboard status` after interruption.
- Re-run `onboard plan` before retrying; it is idempotent and reports new conflicts.
- Do not delete a partially created structure to simulate rollback.
- Do not overwrite a conflict unless the user separately requests and reviews
  that exact replacement.
