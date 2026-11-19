import type { ZodError } from 'zod';
import type { Resume } from './schema';
import { resumeSchema } from './schema';
import type { Job } from './job-schema';
import { jobSchema } from './job-schema';

/**
 * Validation error format compatible with the old jsonschema validator
 */
export interface ValidationError {
  path: string[];
  message: string;
  name: string;
}

/**
 * Validation result for resumes
 */
export interface ValidationResult {
  valid: boolean;
  errors?: ValidationError[];
  data?: Resume;
}

/**
 * Validation result for jobs
 */
export interface JobValidationResult {
  valid: boolean;
  errors?: ValidationError[];
  data?: Job;
}

/**
 * Convert Zod errors to the format expected by the old validator
 */
const formatZodErrors = (error: ZodError): ValidationError[] =>
  error.issues.map((err) => ({
    path: err.path.map(String),
    message: err.message,
    name: err.code,
  }));

/**
 * Validate a resume object (Promise-based)
 */
export const validateResume = (resumeJson: unknown): ValidationResult => {
  const result = resumeSchema.safeParse(resumeJson);

  if (result.success) {
    return {
      valid: true,
      data: result.data,
    };
  }

  return {
    valid: false,
    errors: formatZodErrors(result.error),
  };
};

/**
 * Validate a resume object (callback-based, for backward compatibility)
 */
export const validate = (
  resumeJson: unknown,
  callback: (errors: ValidationError[] | null, valid: boolean) => void
): void => {
  const result = validateResume(resumeJson);

  if (result.valid) {
    callback(null, true);
    return;
  }

  callback(result.errors || [], false);
};

/**
 * Parse and validate a resume, throwing an error if invalid
 */
export const parseResume = (resumeJson: unknown): Resume =>
  resumeSchema.parse(resumeJson);

/**
 * Validate a job object (Promise-based)
 */
export const validateJob = (jobJson: unknown): JobValidationResult => {
  const result = jobSchema.safeParse(jobJson);

  if (result.success) {
    return {
      valid: true,
      data: result.data,
    };
  }

  return {
    valid: false,
    errors: formatZodErrors(result.error),
  };
};

/**
 * Parse and validate a job, throwing an error if invalid
 */
export const parseJob = (jobJson: unknown): Job => jobSchema.parse(jobJson);

export default {
  validate,
  validateResume,
  parseResume,
  validateJob,
  parseJob,
  schema: resumeSchema,
  jobSchema,
};
