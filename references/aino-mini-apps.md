# Aino Desktop AI mini apps

Use this reference when a user asks for an Aino Desktop mini app, custom app,
interactive cockpit, tracker, CRM, library or another persistent interface over
Markdown data.

## Choose the right surface

- Use a normal note or LifeOS command when the user only needs content, capture,
  tasks, search or a one-off data change.
- Use a sibling theme HTML dashboard when one theme needs a mostly read-only,
  source-backed decision surface that can live as one standalone `.html` file.
- Use an Aino mini app when the request needs repeated interaction, multiple
  records or entities, forms, CRUD, filters, imports, subscriptions or an
  app-like workflow.

If the host is not Aino Desktop, explain that creating or publishing the app
requires Aino Desktop. Do not imitate the runtime by manufacturing its internal
files.

## Route to App Builder

Prepare a short brief, then direct the user to Aino Desktop's **New App / 新建应用**
entry and its App Builder. Include only decisions that are already known:

1. the outcome and main user flows;
2. whether relevant Markdown already exists;
3. the selected data directory;
4. each entity's document or block granularity;
5. existing tags, Frontmatter keys, sections and Wikilink relations to preserve;
6. which entities are read-only or writable;
7. the smallest useful first-screen and core operations.

Ask only about consequential unknowns. Do not invent a tag, directory or schema
merely to make the brief look complete.

## LifeOS data guidance

- Keep Markdown as the single business source of truth. Cache may hold only
  disposable, rebuildable derived data.
- Reuse the vault's existing folder names, tags, Frontmatter keys and section
  headings when evidence exists; avoid equivalent duplicate vocabularies.
- Model durable, independently editable records as `document` entities. Model
  dated logs or short entries embedded in periodic notes as `block` entities;
  current block entities are read-only.
- Do not hardcode daily-note paths, date formats or PARA folder names. Resolve
  configured LifeOS/Obsidian conventions before proposing bindings.
- Give writable document entities a stable ID. Express cross-entity relations
  through Wikilinks and preserve unknown Frontmatter and body content.
- Keep the app inside its selected data-directory boundary. Do not silently
  scan, migrate or rewrite same-tag notes elsewhere in the vault.

## Ownership and safety boundary

The Aino host owns the current project schema, permissions, Host SDK, sandbox,
theme variables, validation, functional acceptance, publication and rollback.
Those rules are injected by App Builder and can evolve with Aino.

- Do not output `<aino-app-project>` or `<aino-app-patch>` from this skill.
- Do not create, edit or delete `.lifeos/custom-apps`, its registry, runtime,
  drafts, versions or logs.
- Do not turn a mini-app request into a sibling HTML dashboard unless the user
  chooses the static dashboard after seeing the distinction.
- Once the user is inside App Builder, follow the host-injected Builder rules;
  do not repeat or override them with the full LifeOS skill.
