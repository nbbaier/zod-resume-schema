/**
 * JSON Resume Schema - Zod Edition
 *
 * A complete TypeScript/Zod implementation of the JSON Resume schema.
 * Provides type-safe validation and TypeScript types for resume data.
 */

// Main schema and types
export { resumeSchema, type Resume } from './schema';
export { jobSchema, type Job, remoteLevel } from './job-schema';

// Individual section schemas and types
export {
  basicsSchema,
  type Basics,
  locationSchema,
  type Location,
  profileSchema,
  type Profile,
} from './schemas/basics';
export { workSchema, type Work } from './schemas/work';
export { volunteerSchema, type Volunteer } from './schemas/volunteer';
export { educationSchema, type Education } from './schemas/education';
export { awardSchema, type Award } from './schemas/awards';
export { certificateSchema, type Certificate } from './schemas/certificates';
export { publicationSchema, type Publication } from './schemas/publications';
export { skillSchema, type Skill } from './schemas/skills';
export { languageSchema, type Language } from './schemas/languages';
export { interestSchema, type Interest } from './schemas/interests';
export { referenceSchema, type Reference } from './schemas/references';
export { projectSchema, type Project } from './schemas/projects';
export { metaSchema, type Meta } from './schemas/meta';
export { iso8601Schema, type Iso8601 } from './schemas/iso8601';

// Validator functions
export {
  validate,
  validateResume,
  parseResume,
  validateJob,
  parseJob,
  type ValidationError,
  type ValidationResult,
  type JobValidationResult,
} from './validator';

// Default export for backward compatibility
import { validate } from './validator';
import { resumeSchema } from './schema';
import { jobSchema } from './job-schema';

export default {
  validate,
  schema: resumeSchema,
  jobSchema,
};
