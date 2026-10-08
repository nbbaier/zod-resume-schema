import { z } from 'zod';
import { iso8601Schema } from './schemas/iso8601';
import { locationSchema } from './schemas/basics';
import { skillSchema } from './schemas/skills';
import { metaSchema } from './schemas/meta';

/**
 * Remote work level
 */
export const remoteLevel = z.enum(['Full', 'Hybrid', 'None']);

/**
 * Job Description Schema
 *
 * Schema for job postings/descriptions.
 */
export const jobSchema = z
  .object({
    title: z.string().describe('e.g. Web Developer').optional(),
    company: z.string().describe('e.g. Microsoft').optional(),
    type: z
      .string()
      .describe('Full-time, part-time, contract, etc.')
      .optional(),
    date: iso8601Schema.optional(),
    description: z
      .string()
      .describe('Write a short description about the job')
      .optional(),
    location: locationSchema.optional(),
    remote: remoteLevel
      .describe('The level of remote work available')
      .optional(),
    salary: z.string().describe('e.g. 100000').optional(),
    experience: z
      .string()
      .describe('e.g. Senior or Junior or Mid-level')
      .optional(),
    responsibilities: z
      .array(
        z.string().describe('e.g. Build out a new API for our customer base.'),
      )
      .describe('What the job entails')
      .optional(),
    qualifications: z
      .array(z.string().describe('e.g. undergraduate degree, etc.'))
      .describe('List out your qualifications')
      .optional(),
    skills: z
      .array(skillSchema)
      .describe('List out your professional skill-set')
      .optional(),
    meta: metaSchema
      .describe(
        'The schema version and any other tooling configuration lives here',
      )
      .optional(),
  })
  .passthrough();

export type Job = z.infer<typeof jobSchema>;
