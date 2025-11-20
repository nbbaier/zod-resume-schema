# Agent Instructions

## Commands
- **Build**: `bun run build` (runs `tsc`)
- **Test**: `bun run test` (full suite) or `bun run test-units` (unit tests only)
- **Single Test**: `bun x vitest run test/<file>.spec.js` or `npx vitest run test/<file>.spec.js`
- **Validate**: `bun run validate` (validates schema against metaschema)

## Code Style & Conventions
- **Language**: TypeScript with strict mode enabled (`ES2020` target).
- **Formatting**: Single quotes required (enforced by Prettier).
- **Schemas**: Use `zod` for validation. Define in `src/schemas/` and export schema + inferred type.
  - Example: `export const mySchema = z.object({...}); export type MyType = z.infer<typeof mySchema>;`
- **Naming**: camelCase for schemas/variables, PascalCase for types/interfaces.
- **Imports**: Use relative imports (e.g., `./schemas/basics`). Avoid circular dependencies.
- **Structure**: 
  - `src/schemas/*.ts`: Individual Zod definitions.
  - `src/index.ts`: Main entry point, re-exports all schemas and types.
- **Testing**: Use Vitest. Tests located in `test/` with `.spec.js` extension.
