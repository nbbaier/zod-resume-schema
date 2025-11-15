import { ZodError } from 'zod';
import { resumeSchema, Resume } from './schema';

/**
 * Validation error format compatible with the old jsonschema validator
 */
export interface ValidationError {
  path: string[];
  message: string;
  name: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors?: ValidationError[];
  data?: Resume;
}

/**
 * Convert Zod errors to the format expected by the old validator
 */
function formatZodErrors(error: ZodError): ValidationError[] {
  return error.issues.map((err) => ({
    path: err.path.map(String),
    message: err.message,
    name: err.code,
  }));
}

/**
 * Validate a resume object (Promise-based)
 */
export function validateResume(resumeJson: unknown): ValidationResult {
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
}

/**
 * Validate a resume object (callback-based, for backward compatibility)
 */
export function validate(
  resumeJson: unknown,
  callback: (errors: ValidationError[] | null, valid: boolean) => void
): void {
  const result = validateResume(resumeJson);

  if (result.valid) {
    callback(null, true);
  } else {
    callback(result.errors || [], false);
  }
}

/**
 * Parse and validate a resume, throwing an error if invalid
 */
export function parseResume(resumeJson: unknown): Resume {
  return resumeSchema.parse(resumeJson);
}

export default {
  validate,
  validateResume,
  parseResume,
  schema: resumeSchema,
};
