# Agent Instructions

Zod/TypeScript implementation of the JSON Resume schema (`@jsonresume/schema`).

## Gotchas
- **Dual schema**: Zod in `src/` is the source of truth, but `schema.json` and `job-schema.json` are hand-maintained, with no generator. Every schema change lands in both, then `bun run validate`.
- Unit tests import the root `validator.js`, which loads `dist/`. Run `bun run build` before `bun run test-units`, or you test a stale `dist/`. `bun run test` does both.
- Use `bun run test`; bare `bun test` invokes Bun's runner, not the script.
- Single test: `bun x vitest run test/<file>.spec.js` (after a build).
- Commit messages and PR titles use conventional prefixes (`feat:`, `fix:`, `docs:`, `chore:`). PRs target `main`.

## Standards
Before editing anything in `src/`, `test/`, or either JSON schema, read `CODING_STANDARDS.md`.
