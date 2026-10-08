# JSON Resume Schema Examples

Usage examples for the `@jsonresume/schema` Zod implementation.

## Files

- **`typescript-usage.ts`** - Validate and build resumes with the typed Zod schemas
- **`javascript-usage.js`** - Validate resumes from plain JavaScript

## Usage Examples

### TypeScript Usage

```typescript
import { resumeSchema, type Resume } from '@jsonresume/schema';

// Validate a resume
const result = resumeSchema.safeParse(resumeData);
if (result.success) {
  const resume: Resume = result.data;
  // Use the validated resume
}

// Generate JSON Schema
import * as z from 'zod';
const jsonSchema = z.toJSONSchema(resumeSchema, {
  target: 'draft-7',
});
```

### JSON Schema Usage

```javascript
const Validator = require('jsonschema').Validator;
const schema = require('@jsonresume/schema/schema.json');

const v = new Validator();
const result = v.validate(resumeData, schema);
```

## JSON Schema Generation

The published `schema.json` and `job-schema.json` are generated from the Zod
schemas by `bun run build` (see `scripts/build-schemas.ts` at the repo root).
Never edit them by hand — change the Zod schemas in `src/` and rebuild.

## Why Zod?

Zod provides several advantages over traditional JSON Schema:

1. **Type Safety** - Automatic TypeScript type generation
2. **Runtime Validation** - Validates data at runtime with helpful error messages
3. **Developer Experience** - Better IDE autocomplete and refactoring support
4. **Modular Composition** - Easily compose and reuse schema components
5. **Single Source of Truth** - Generate both TypeScript types and JSON schemas from one definition
