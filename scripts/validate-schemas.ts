/**
 * Validate that `schema.json` and `job-schema.json` are valid draft-07 schemas.
 *
 * Run via `bun run validate` or directly: `bun scripts/validate-schemas.ts`.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Validator } from 'jsonschema';

const rootDir = path.join(import.meta.dir, '..');
const metaSchema = JSON.parse(
  readFileSync(
    path.join(rootDir, 'node_modules/json-metaschema/draft-07-schema.json'),
    'utf-8'
  )
);

const validator = new Validator();

let failed = false;
for (const file of ['schema.json', 'job-schema.json']) {
  const schema = JSON.parse(readFileSync(path.join(rootDir, file), 'utf-8'));
  const result = validator.validate(schema, metaSchema);
  if (result.valid) {
    console.log(`${file} is a valid draft-07 schema`);
  } else {
    failed = true;
    console.error(`${file} is NOT a valid draft-07 schema:`);
    for (const error of result.errors) {
      console.error(`  - ${error.stack}`);
    }
  }
}

if (failed) {
  process.exit(1);
}
