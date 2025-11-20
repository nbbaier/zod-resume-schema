# Codebase Overview

This project, `zod-resume-schema`, is a TypeScript implementation of the JSON Resume schema using [Zod](https://zod.dev/). It provides type-safe validation and TypeScript types for resume data. The project recently migrated from manually-written JSON Schema to Zod-based schemas for better type safety and developer experience.

## Core Architecture

### Zod-Based Schema System
The project uses Zod v4 as the single source of truth for both TypeScript types and JSON Schema generation. This means:
- Schema definitions live in `src/schemas/*.ts` as Zod objects
- TypeScript types are automatically inferred (`export type Resume = z.infer<typeof resumeSchema>`)
- JSON schemas can be generated using Zod v4's native `z.toJSONSchema()` method
- All validation happens through Zod's runtime validation

### Dual Schema Support
The project maintains two main schemas:
1. **Resume Schema** (`src/schema.ts`) - Complete JSON Resume standard implementation
2. **Job Schema** (`src/job-schema.ts`) - Draft schema for job descriptions

## Project Structure

### Source Code (`src/`)
- **`index.ts`**: Main entry point that re-exports everything (schemas, types, validators)
- **`schema.ts`**: Main `resumeSchema` that composes all individual section schemas
- **`job-schema.ts`**: Job description schema with remote work levels
- **`validator.ts`**: Validation functions with both Promise and callback APIs for backward compatibility
- **`schemas/`**: Modular schema definitions (14 files):
  - `basics.ts` - Personal info, location, profiles
  - `work.ts` - Work experience
  - `education.ts` - Education history
  - `projects.ts` - Personal/professional projects
  - `skills.ts` - Technical and professional skills
  - And 9 others for awards, certificates, publications, etc.

### Testing (`test/`)
- **14 test files** (`*.spec.js`) - One per schema section using Vitest
- **JSON fixtures** (`__test__/`) - Sample valid/invalid data for each section
- **416 total unit tests** - All passing as of last verification

### Examples & Build (`examples/`)
Contains verification scripts and examples:
- **`build-schemas.ts`** - Production script to generate `schema.json` and `job-schema.json`
- **`VERIFICATION_REPORT.md`** - Confirms Zod v4 JSON schema generation works correctly
- Usage examples for both TypeScript and JavaScript consumers

## Key Features & Implementation Details

### Validation System
The validator (`src/validator.ts`) provides three APIs:
1. **`validateResume()`** - Returns `ValidationResult` object (Promise-style)
2. **`validate()`** - Callback-based API for backward compatibility
3. **`parseResume()`** - Throws on invalid data (strict validation)

### JSON Schema Generation
Using Zod v4's native `z.toJSONSchema()` method:
```typescript
const jsonSchema = z.toJSONSchema(resumeSchema, {
  target: 'draft-7',
  $refStrategy: 'none',
});
```
This generates the traditional JSON schemas that the broader JSON Resume ecosystem expects.

### Export Structure
The package exports multiple entry points:
- Main package (`.`) - All schemas, types, and validators
- `/schema` - Resume schema only
- `/job-schema` - Job schema only  
- `/validator` - Validation functions only

## Development Workflow

### Commands
- **`bun run build`** - Compiles TypeScript to `dist/`
- **`bun run test`** - Full test suite (build + validate + unit tests)
- **`bun run test-units`** - Unit tests only
- **`bun run validate`** - Validates schema against JSON metaschema

### Code Style
- TypeScript with strict mode, ES2020 target
- Single quotes enforced by Prettier
- CamelCase for schemas, PascalCase for types
- Modular imports (e.g., `./schemas/basics`)

## Current State & TODOs

### Recent Migration
The project recently migrated from manual JSON Schema to Zod (see PR #1). The migration is complete and verified - all 416 tests pass with the new Zod-based system.

### Potential Future Work
- **Schema versioning strategy** - How to handle schema evolution with Zod
- **Performance optimization** - Zod validation vs JSON Schema validation performance
- **Enhanced error messages** - Improve Zod error formatting for better UX
- **Job schema finalization** - The job schema is still in draft status
- **Automated schema publishing** - Integrate JSON schema generation into CI/CD

### Sample Data Structure
The schemas support the full JSON Resume standard including:
- Basic info (name, email, phone, location, profiles)
- Work/volunteer experience with dates and descriptions
- Education with institutions and degrees
- Projects, publications, awards, certificates
- Skills with proficiency levels
- Languages, interests, references
- Metadata for schema versioning

## Quick Start Checklist
1. Run `bun install` to install dependencies
2. Run `bun run test` to verify everything works
3. Check `src/schemas/basics.ts` to understand the schema pattern
4. Look at `test/basics.spec.js` to see testing approach
5. Review `examples/typescript-usage.ts` for consumption patterns

The codebase is well-structured, thoroughly tested, and ready for development. The Zod-based approach provides excellent type safety while maintaining compatibility with the broader JSON Resume ecosystem through JSON schema generation.
