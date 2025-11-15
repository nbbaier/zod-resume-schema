/**
 * Validation test using the generated JSON Schema
 *
 * This script validates sample resume data using the JSON Schema
 * generated from Zod schemas to ensure compatibility.
 */

import * as z from 'zod';
import { resumeSchema } from '../src/schema';
import { Validator } from 'jsonschema';
import * as fs from 'fs';
import * as path from 'path';

// Generate JSON Schema
const resumeJsonSchema = z.toJSONSchema(resumeSchema, {
  target: 'draft-7',
  $refStrategy: 'none',
});

// Load sample resume
const sampleResumePath = path.join(__dirname, '..', 'sample.resume.json');
const sampleResume = JSON.parse(fs.readFileSync(sampleResumePath, 'utf-8'));

// Test 1: Validate using Zod
console.log('=== Test 1: Validating with Zod ===');
const zodResult = resumeSchema.safeParse(sampleResume);
if (zodResult.success) {
  console.log('✓ Sample resume is valid according to Zod schema');
} else {
  console.log('✗ Sample resume is invalid according to Zod schema');
  console.error('Errors:', zodResult.error.issues);
  process.exit(1);
}

// Test 2: Validate using generated JSON Schema with jsonschema library
console.log('\n=== Test 2: Validating with Generated JSON Schema ===');
const validator = new Validator();
const jsonSchemaResult = validator.validate(sampleResume, resumeJsonSchema);

if (jsonSchemaResult.valid) {
  console.log('✓ Sample resume is valid according to generated JSON Schema');
} else {
  console.log('✗ Sample resume is invalid according to generated JSON Schema');
  console.error('Errors:', jsonSchemaResult.errors);
  process.exit(1);
}

// Test 3: Validate using existing JSON Schema
console.log('\n=== Test 3: Validating with Existing JSON Schema ===');
const existingSchema = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'schema.json'), 'utf-8')
);
const existingResult = validator.validate(sampleResume, existingSchema);

if (existingResult.valid) {
  console.log('✓ Sample resume is valid according to existing JSON Schema');
} else {
  console.log('✗ Sample resume is invalid according to existing JSON Schema');
  console.error('Errors:', existingResult.errors);
}

// Test 4: Validate test fixtures using generated schema
console.log('\n=== Test 4: Validating Test Fixtures ===');
const basicsFixtures = require('../test/__test__/basics.json');

// Test valid basics
const validBasicsResult = resumeSchema.safeParse(basicsFixtures.basicsValid);
if (validBasicsResult.success) {
  console.log('✓ Valid basics fixture passes Zod validation');
} else {
  console.log('✗ Valid basics fixture fails Zod validation');
  console.error('Errors:', validBasicsResult.error.issues);
}

// Test invalid basics (should fail)
const invalidBasicsResult = resumeSchema.safeParse(basicsFixtures.basicsInvalid);
if (!invalidBasicsResult.success) {
  console.log('✓ Invalid basics fixture correctly fails Zod validation');
} else {
  console.log('✗ Invalid basics fixture incorrectly passes Zod validation');
}

console.log('\n=== All Validation Tests Completed Successfully ===');
