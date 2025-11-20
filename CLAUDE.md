# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the JSON Resume Schema package (`@jsonresume/schema`) - a TypeScript/Zod implementation of the JSON Resume standard. The project provides type-safe validation for resume and job description data.

## Core Architecture

### Dual Schema System

The codebase maintains **both** Zod schemas (TypeScript) and JSON schemas for validation:

- **Zod schemas** (source of truth): Located in `src/` - these define the runtime validation and TypeScript types
- **JSON schemas**: `schema.json` and `job-schema.json` - these are generated from the Zod schemas for backward compatibility

### Module Structure

The architecture follows a modular pattern with three main layers:

1. **Individual schemas** (`src/schemas/*.ts`): Each resume section (basics, work, education, etc.) is defined in its own file with a dedicated Zod schema. All schemas use `.passthrough()` to allow additional properties.

2. **Composite schemas** (`src/schema.ts`, `src/job-schema.ts`): Compose individual schemas into complete Resume and Job schemas.

3. **Validator layer** (`src/validator.ts`): Provides both callback-based (legacy) and Promise-based validation APIs.

4. **Main export** (`src/index.ts`): Exports all schemas, types, and validation functions with multiple export patterns for backward compatibility.

### Export Strategy

The package supports multiple import patterns:
- Default export: `import resumeSchema from '@jsonresume/schema'`
- Named exports: `import { resumeSchema, validateResume } from '@jsonresume/schema'`
- Subpath exports: `import { resumeSchema } from '@jsonresume/schema/schema'`

## Development Commands

### Build
```bash
bun run build
```
Compiles TypeScript to `dist/`. Automatically cleans the dist folder first via prebuild script.

### Testing
```bash
# Run all tests (builds first, validates schemas, then runs unit tests)
bun test

# Run only unit tests
bun run test-units

# Run with coverage
bun run coverage

# Validate JSON schemas against meta-schema
bun run validate
```

Tests are written in Vitest (`.spec.js` files in `test/`) and use fixture data from `test/__test__/*.json`. The test suite validates each schema section independently and uses callback-based validation for backward compatibility testing.

### Version Management

This project uses automatic semantic versioning:
- PR titles with `fix:` prefix bump patch version
- PR titles with `feat:` prefix bump minor version
- Major version bumps are manual and rare

The `preversion` script runs tests before any version bump, and `postversion` pushes tags automatically.

## Key Implementation Details

### ISO 8601 Date Handling

Dates use a custom regex-based Zod schema (`src/schemas/iso8601.ts`) that validates ISO 8601 formats including dates, dates with times, and durations.

### Validation APIs

Three validation approaches are provided:
- `validate(data, callback)` - Callback-based (legacy compatibility)
- `validateResume(data)` - Returns `ValidationResult` object
- `parseResume(data)` - Throws on invalid data (Zod's native `parse`)

Zod errors are transformed into a jsonschema-compatible error format for backward compatibility.

### Schema Philosophy

All resume fields are optional to support incremental resume building. The schemas use `.passthrough()` to allow additional properties beyond those defined in the specification.

## Branching Strategy

- `master` branch represents the current stable schema version (v1.0.0)
- All PRs for the next version should target the `develop` branch
- This ensures the npm package always contains the official stable release

## Package Distribution

The package publishes these files to npm (see `files` in package.json):
- `dist/` - Compiled TypeScript
- `schema.json` and `job-schema.json` - JSON schemas
- `sample.resume.json` and `sample.job.json` - Example data
- Legacy `validator.js` for backward compatibility
