# Issue tracker: GitHub

Issues and specs live in GitHub Issues for `nbbaier/zod-resume-schema`.
Use the `gh` CLI with `--repo nbbaier/zod-resume-schema` explicitly;
this clone also has an upstream remote.

## Conventions

- Create: `gh issue create --repo nbbaier/zod-resume-schema --title "..." --body-file <path>`.
- Read: `gh issue view <number> --repo nbbaier/zod-resume-schema --comments`.
- List: `gh issue list --repo nbbaier/zod-resume-schema --state open --json number,title,body,labels,comments`.
- Comment: `gh issue comment <number> --repo nbbaier/zod-resume-schema --body-file <path>`.
- Label: `gh issue edit <number> --repo nbbaier/zod-resume-schema --add-label "..."` or `--remove-label "..."`.
- Close: `gh issue close <number> --repo nbbaier/zod-resume-schema --comment "..."`.

Use a UTF-8 body file for multiline issue bodies and comments.

When a skill says "publish to the issue tracker", create a GitHub issue.
When it says "fetch the relevant ticket", read the issue and its comments.

## Pull requests as a triage surface

**PRs as a request surface: no.**

GitHub shares issue and PR numbers. Resolve ambiguous references with
`gh pr view` first, then `gh issue view`, using the explicit repo.

## Wayfinding operations

- Map: one issue labelled `wayfinder:map`, containing Notes,
  Decisions-so-far, and Fog.
- Child tickets: link as GitHub sub-issues; if unavailable, use a task
  list in the map and `Part of #<map>` in each child.
  Label children `wayfinder:<type>`:
  `research`, `prototype`, `grilling`, or `task`.
- Blocking: use native GitHub issue dependencies via `gh api`, with
  numeric database IDs. If unavailable, record `Blocked by: #<number>`
  at the top of the child body.
- Frontier: choose the first open child in map order with no open
  blockers and no assignee.
- Claim: assign the ticket to the driving developer with
  `gh issue edit <number> --repo nbbaier/zod-resume-schema --add-assignee @me`.
- Resolve: comment with the answer, close the child, then append a
  concise finding and link to the map's Decisions-so-far.
