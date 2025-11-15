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
    /** e.g. Web Developer */
    title: z.string().optional(),
    /** e.g. Microsoft */
    company: z.string().optional(),
    /** Full-time, part-time, contract, etc. */
    type: z.string().optional(),
    date: iso8601Schema.optional(),
    /** Write a short description about the job */
    description: z.string().optional(),
    location: locationSchema.optional(),
    /** The level of remote work available */
    remote: remoteLevel.optional(),
    /** e.g. 100000 */
    salary: z.string().optional(),
    /** e.g. Senior or Junior or Mid-level */
    experience: z.string().optional(),
    /** What the job entails */
    responsibilities: z
      .array(z.string().describe('e.g. Build out a new API for our customer base.'))
      .optional(),
    /** List out your qualifications */
    qualifications: z
      .array(z.string().describe('e.g. undergraduate degree, etc.'))
      .optional(),
    /** List out your professional skill-set */
    skills: z.array(skillSchema).optional(),
    /** The schema version and any other tooling configuration lives here */
    meta: metaSchema.optional(),
  })
  .passthrough();

export type Job = z.infer<typeof jobSchema>;
