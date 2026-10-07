# Coding Standards

## Schemas (`src/schemas/*.ts`)
- One section per file. Export the schema and its inferred type:
  `export const workSchema = z.object({...}).passthrough(); export type Work = z.infer<typeof workSchema>;`
- Every field optional (resumes are built incrementally); every object `.passthrough()` (extra properties allowed).
- Dates use `iso8601Schema` from `src/schemas/iso8601.ts` (`YYYY`, `YYYY-MM`, or `YYYY-MM-DD`), never a bare `z.string()`.
- Compose sections in `src/schema.ts` / `src/job-schema.ts`; re-export new schemas and types from `src/index.ts`.
- Mirror every change in `schema.json` / `job-schema.json` (dual schema).

## Validator (`src/validator.ts`)
- Public API is fixed for backward compatibility: `validate(data, cb)`, `validateResume(data)` → `ValidationResult` (synchronous), `parseResume(data)` throws.
- `formatZodErrors` maps Zod issues to the legacy jsonschema shape `{ path, message, name }`; keep that shape stable.
- Root `validator.js` is a CommonJS shim over `dist/` that re-exports the validator functions, Zod schemas, and raw JSON schemas; update it when that public surface changes.

## Tests (`test/*.spec.js`)
- One spec per section, fixtures in `test/__test__/<section>.json`.
- Cover valid and invalid cases through the callback `validate` API.
