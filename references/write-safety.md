# Note and task write checks

## Pass content literally

The CLI decodes `\n`, `\t`, `\r` and `\\` in `content=` after the shell
has parsed arguments. Prefer `--literal-content` on a CLI version that supports
it, so content is passed unchanged. On older versions, preserve literal
backslashes by doubling them before passing content; actual newline characters can remain actual newlines. Use an
argument array with `shell=false`, or proper shell quoting. JSON stringification
is not shell escaping. Backticks and `$()` inside double quotes can execute.
For large HTML/Markdown, a vault-scoped exact file edit is acceptable when the
host supports it; do not invent a CLI `content-file` or stdin option.

## Revalidate before mutating

- Read the exact target and merge only requested changes. Before a whole-file
  replacement, reread it; if changed since the initial read, merge against the
  latest content. A CLI `overwrite` is not a compare-and-swap operation and does
  not protect against another app/session editing concurrently.
- Task `file:line` references are positions, not IDs. Reread the current task
  text/state, refresh its line after preceding edits, and verify the intended
  checkbox afterward. On supported CLI versions, pass `expected=<exact-current-line>`
  so the service rejects a stale reference before writing. Preserve custom statuses, dates, block IDs and other
  metadata unless their change was requested. Skip an already satisfied state.
- If a write times out or its receipt is lost, inspect the destination before
  retrying. Appends are not idempotent. Resume missing work; do not duplicate a
  capture, task, wiki link or changelog entry.

## Verify the saved result

Read back the destination. Check requested content, literal text, valid
frontmatter, intended section ownership and preservation of unrelated content.
Repeated headings require identifying the exact section, not blindly using a
name that can match more than once. Check the actual saved path and filename.
For template-created notes also compare the selected template and `templatePath`
receipt; preserve intentional query syntax and custom properties.

A write receipt proves a mutation, not rendered UI, query completeness, external
execution or dated task completion. Report those separately. For multi-file
workflows, verify each affected file and keep partial progress explicit.
