# JSON Resume Schema Examples

This directory contains examples and verification scripts for the JSON Resume Zod schema implementation.

## Files

### Verification Scripts

- **`VERIFICATION_REPORT.md`** - Comprehensive report verifying that `z.toJSONSchema()` works with the test suite
- **`generate-json-schema.ts`** - Generates JSON schemas and compares with existing schemas
- **`validate-with-generated-schema.ts`** - Validates sample data using multiple approaches
- **`build-schemas.ts`** - Production script to generate schema.json and job-schema.json

### Generated Files (for testing)

- **`generated-schema.json`** - Sample JSON schema generated from resumeSchema
- **`generated-job-schema.json`** - Sample JSON schema generated from jobSchema

## Quick Start

### Generate JSON Schemas

```bash
npx tsx examples/build-schemas.ts
```

This generates `schema.json` and `job-schema.json` at the project root.

### Verify Schema Generation

```bash
npx tsx examples/validate-with-generated-schema.ts
```

This validates that:
1. Sample resume passes Zod validation
2. Sample resume passes generated JSON Schema validation
3. Sample resume passes existing JSON Schema validation
4. Test fixtures behave correctly

### Compare Schemas

```bash
npx tsx examples/generate-json-schema.ts
```

This generates schemas to the examples directory and compares their structure.

## Integration into Build Process

To automatically generate JSON schemas during the build process, add to `package.json`:

```json
{
  "scripts": {
    "generate-schemas": "tsx examples/build-schemas.ts",
    "prebuild": "npm run generate-schemas && rm -rf dist",
    "build": "tsc"
  }
}
```

This ensures that:
- JSON schemas are regenerated before each build
- Schemas stay in sync with Zod definitions
- Type changes automatically propagate to JSON schemas

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

## Verification Results

✅ **All 416 unit tests pass**
✅ **Generated schemas are valid Draft 7 JSON schemas**
✅ **Sample data validates correctly**
✅ **Test fixtures behave as expected**

See `VERIFICATION_REPORT.md` for detailed results.

## Why Zod?

Zod provides several advantages over traditional JSON Schema:

1. **Type Safety** - Automatic TypeScript type generation
2. **Runtime Validation** - Validates data at runtime with helpful error messages
3. **Developer Experience** - Better IDE autocomplete and refactoring support
4. **Modular Composition** - Easily compose and reuse schema components
5. **Single Source of Truth** - Generate both TypeScript types and JSON schemas from one definition

## Zod v4 JSON Schema Support

Zod v4 includes native JSON Schema generation:

```typescript
import * as z from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});

const jsonSchema = z.toJSONSchema(schema, {
  target: 'draft-7',        // JSON Schema version
  $refStrategy: 'none',     // How to handle references
});
```

### Configuration Options

- **target**: `'draft-2020-12'`, `'draft-7'`, `'draft-4'`, or `'openapi-3.0'`
- **$refStrategy**: `'none'` (inline), `'root'` ($defs), or `'relative'`
- **unrepresentable**: How to handle types without JSON Schema analogs
- **cycles**: How to handle circular references

## Resources

- [Zod v4 Documentation](https://zod.dev/v4)
- [Zod JSON Schema Guide](https://zod.dev/json-schema)
- [JSON Resume Schema](https://jsonresume.org/schema/)
- [JSON Schema Draft 7](http://json-schema.org/draft-07/schema)
