#!/usr/bin/env tsx
/**
 * Build Script: Generate JSON Schemas from Zod
 *
 * This script generates schema.json and job-schema.json from the Zod schemas.
 * It can be integrated into the build process to keep JSON schemas in sync.
 *
 * Usage:
 *   npm run generate-schemas
 *   or
 *   npx tsx examples/build-schemas.ts
 */

import * as z from 'zod';
import { resumeSchema } from '../src/schema';
import { jobSchema } from '../src/job-schema';
import * as fs from 'fs';
import * as path from 'path';

// Schema metadata
const SCHEMA_VERSION = 'http://json-schema.org/draft-07/schema#';
const RESUME_SCHEMA_ID = 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json';
const JOB_SCHEMA_ID = 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/job-schema.json';

function generateSchema(
  zodSchema: z.ZodType,
  schemaId: string,
  outputPath: string,
  description?: string
): void {
  console.log(`Generating ${path.basename(outputPath)}...`);

  // Generate JSON Schema
  const jsonSchema = z.toJSONSchema(zodSchema, {
    target: 'draft-7',
    $refStrategy: 'none', // Inline all definitions for simplicity
  });

  // Add metadata
  const schemaWithMetadata = {
    $schema: SCHEMA_VERSION,
    $id: schemaId,
    ...(description && { description }),
    ...jsonSchema,
  };

  // Write to file
  fs.writeFileSync(
    outputPath,
    JSON.stringify(schemaWithMetadata, null, 2) + '\n'
  );

  console.log(`✓ Generated ${outputPath}`);
}

function main(): void {
  console.log('Generating JSON Schemas from Zod definitions...\n');

  const rootDir = path.join(__dirname, '..');

  try {
    // Generate resume schema
    generateSchema(
      resumeSchema,
      RESUME_SCHEMA_ID,
      path.join(rootDir, 'schema.json'),
      'JSON Resume Schema - Defines the structure of a resume document'
    );

    // Generate job schema
    generateSchema(
      jobSchema,
      JOB_SCHEMA_ID,
      path.join(rootDir, 'job-schema.json'),
      'JSON Resume Job Schema - Defines the structure of a job posting document'
    );

    console.log('\n✓ All schemas generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Review the generated schemas');
    console.log('2. Run: npm run validate');
    console.log('3. Run: npm test');
  } catch (error) {
    console.error('\n✗ Error generating schemas:');
    console.error(error);
    process.exit(1);
  }
}

main();
