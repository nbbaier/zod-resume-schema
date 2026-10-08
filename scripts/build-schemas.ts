/**
 * Generate `schema.json` and `job-schema.json` from the Zod schemas in `src/`.
 *
 * The JSON schemas are build artifacts — never edit them by hand.
 * Field descriptions come from `.describe()` on the Zod schemas.
 *
 * Run via `bun run build` (part of the build) or directly: `bun scripts/build-schemas.ts`.
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';
import { resumeSchema } from '../src/schema';
import { jobSchema } from '../src/job-schema';

const DRAFT_07 = 'http://json-schema.org/draft-07/schema#';
const RESUME_SCHEMA_ID =
  'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json';
const JOB_SCHEMA_ID =
  'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/job-schema.json';

function generateSchema(
  zodSchema: z.ZodType,
  schemaId: string,
  outputPath: string,
  title: string,
  description: string,
): void {
  const jsonSchema = z.toJSONSchema(zodSchema, { target: 'draft-7' }) as Record<
    string,
    unknown
  >;
  delete jsonSchema.$schema;

  const output = {
    $schema: DRAFT_07,
    $id: schemaId,
    title,
    description,
    ...jsonSchema,
  };

  writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`Generated ${outputPath}`);
}

const rootDir = join(import.meta.dir, '..');

generateSchema(
  resumeSchema,
  RESUME_SCHEMA_ID,
  join(rootDir, 'schema.json'),
  'Resume Schema',
  'JSON Resume Schema - Defines the structure of a resume document',
);

generateSchema(
  jobSchema,
  JOB_SCHEMA_ID,
  join(rootDir, 'job-schema.json'),
  'Job Description Schema',
  'JSON Resume Job Schema - Defines the structure of a job posting document',
);
