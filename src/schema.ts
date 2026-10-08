import { z } from 'zod';
import { basicsSchema } from './schemas/basics';
import { workSchema } from './schemas/work';
import { volunteerSchema } from './schemas/volunteer';
import { educationSchema } from './schemas/education';
import { awardSchema } from './schemas/awards';
import { certificateSchema } from './schemas/certificates';
import { publicationSchema } from './schemas/publications';
import { skillSchema } from './schemas/skills';
import { languageSchema } from './schemas/languages';
import { interestSchema } from './schemas/interests';
import { referenceSchema } from './schemas/references';
import { projectSchema } from './schemas/projects';
import { metaSchema } from './schemas/meta';

/**
 * JSON Resume Schema
 *
 * The complete schema for a JSON Resume document.
 * All fields are optional to allow for incremental building of resumes.
 */
export const resumeSchema = z
  .object({
    $schema: z
      .string()
      .url()
      .describe(
        'link to the version of the schema that can validate the resume',
      )
      .optional(),
    basics: basicsSchema.optional(),
    work: z.array(workSchema).optional(),
    volunteer: z.array(volunteerSchema).optional(),
    education: z.array(educationSchema).optional(),
    awards: z
      .array(awardSchema)
      .describe(
        'Specify any awards you have received throughout your professional career',
      )
      .optional(),
    certificates: z
      .array(certificateSchema)
      .describe(
        'Specify any certificates you have received throughout your professional career',
      )
      .optional(),
    publications: z
      .array(publicationSchema)
      .describe('Specify your publications through your career')
      .optional(),
    skills: z
      .array(skillSchema)
      .describe('List out your professional skill-set')
      .optional(),
    languages: z
      .array(languageSchema)
      .describe('List any other languages you speak')
      .optional(),
    interests: z.array(interestSchema).optional(),
    references: z
      .array(referenceSchema)
      .describe('List references you have received')
      .optional(),
    projects: z
      .array(projectSchema)
      .describe('Specify career projects')
      .optional(),
    meta: metaSchema
      .describe(
        'The schema version and any other tooling configuration lives here',
      )
      .optional(),
  })
  .passthrough();

export type Resume = z.infer<typeof resumeSchema>;

// Re-export all individual schemas for modular use
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
