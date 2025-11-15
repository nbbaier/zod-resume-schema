'use strict';

/**
 * Backward compatibility wrapper for the new Zod-based validator
 *
 * This file maintains the same API as the old validator.js but uses
 * the new Zod-based validation under the hood.
 */

const { validate, validateResume, parseResume } = require('./dist/validator');
const { resumeSchema } = require('./dist/schema');
const { jobSchema } = require('./dist/job-schema');

// Also export the raw JSON schemas for backward compatibility
const schema = require('./schema.json');
const jobSchemaJson = require('./job-schema.json');

module.exports = {
  validate,
  validateResume,
  parseResume,
  schema: resumeSchema,
  jobSchema: jobSchema,
  // Provide JSON schemas for tools that need them
  schemaJson: schema,
  jobSchemaJson: jobSchemaJson,
};
