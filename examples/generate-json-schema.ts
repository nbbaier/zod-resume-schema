/**
 * Script to generate JSON Schema from Zod schemas
 *
 * This demonstrates and verifies that z.toJSONSchema() generates
 * valid JSON Schema that works with the existing test suite.
 */

import * as z from 'zod';
import { resumeSchema } from '../src/schema';
import { jobSchema } from '../src/job-schema';
import * as fs from 'fs';
import * as path from 'path';

// Generate JSON Schema for resume schema
console.log('Generating JSON Schema for resume schema...');
const resumeJsonSchema = z.toJSONSchema(resumeSchema, {
  target: 'draft-7', // Use Draft 7 to match existing schema
  $refStrategy: 'none', // Inline all definitions
});

// Generate JSON Schema for job schema
console.log('Generating JSON Schema for job schema...');
const jobJsonSchema = z.toJSONSchema(jobSchema, {
  target: 'draft-7',
  $refStrategy: 'none',
});

// Write generated schemas to files for inspection
const outputDir = path.join(__dirname);
const resumeOutputPath = path.join(outputDir, 'generated-schema.json');
const jobOutputPath = path.join(outputDir, 'generated-job-schema.json');

fs.writeFileSync(resumeOutputPath, JSON.stringify(resumeJsonSchema, null, 2));
fs.writeFileSync(jobOutputPath, JSON.stringify(jobJsonSchema, null, 2));

console.log(`\nGenerated schemas written to:`);
console.log(`- Resume: ${resumeOutputPath}`);
console.log(`- Job: ${jobOutputPath}`);

// Display the generated resume schema
console.log('\n=== Generated Resume Schema ===');
console.log(JSON.stringify(resumeJsonSchema, null, 2));

console.log('\n=== Generated Job Schema ===');
console.log(JSON.stringify(jobJsonSchema, null, 2));

// Load existing schemas for comparison
const existingResumeSchema = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'schema.json'), 'utf-8')
);
const existingJobSchema = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'job-schema.json'), 'utf-8')
);

console.log('\n=== Schema Comparison ===');
console.log('Resume Schema:');
console.log(`- Generated keys: ${Object.keys(resumeJsonSchema).sort().join(', ')}`);
console.log(`- Existing keys: ${Object.keys(existingResumeSchema).sort().join(', ')}`);

console.log('\nJob Schema:');
console.log(`- Generated keys: ${Object.keys(jobJsonSchema).sort().join(', ')}`);
console.log(`- Existing keys: ${Object.keys(existingJobSchema).sort().join(', ')}`);
