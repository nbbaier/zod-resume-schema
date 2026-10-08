# Agent Instructions

Zod/TypeScript implementation of the JSON Resume schema (`@jsonresume/schema`).

## Gotchas
- **Generated JSON schemas**: `schema.json` and `job-schema.json` are generated from the Zod schemas by `bun run build` (via `scripts/build-schemas.ts`). Never edit them by hand — change the Zod schemas (field descriptions via `.describe()`) and rebuild. `bun run validate` then checks they are valid draft-07.
- Unit tests import the root `validator.js`, which loads `dist/`. Run `bun run build` before `bun run test-units`, or you test a stale `dist/`. `bun run test` does both.
- Use `bun run test`; bare `bun test` invokes Bun's runner, not the script.
- Single test: `bun x vitest run test/<file>.spec.js` (after a build).
- Commit messages and PR titles use conventional prefixes (`feat:`, `fix:`, `docs:`, `chore:`). PRs target `main`.

## Standards
Before editing anything in `src/`, `test/`, or either JSON schema, read `CODING_STANDARDS.md`.

## Agent skills

### Issue tracker

Track issues in GitHub Issues for `nbbaier/zod-resume-schema`.
Before issue operations, read `docs/agents/issue-tracker.md`.

### Triage labels

Use the five default triage labels.
Before triage, read `docs/agents/triage-labels.md`.

### Domain docs

Use a single-context layout: root `GLOSSARY.md` and `docs/adr/`.
Before codebase exploration, read `docs/agents/domain.md`.
