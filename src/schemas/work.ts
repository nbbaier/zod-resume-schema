import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Work experience entry
 */
export const workSchema = z
  .object({
    /** e.g. Facebook */
    name: z.string().optional(),
    /** e.g. Menlo Park, CA */
    location: z.string().optional(),
    /** e.g. Social Media Company */
    description: z.string().optional(),
    /** e.g. Software Engineer */
    position: z.string().optional(),
    /** e.g. http://facebook.example.com */
    url: z.string().url().optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    /** Give an overview of your responsibilities at the company */
    summary: z.string().optional(),
    /** Specify multiple accomplishments */
    highlights: z
      .array(
        z.string().describe('e.g. Increased profits by 20% from 2011-2012 through viral advertising')
      )
      .optional(),
  })
  .passthrough();

export type Work = z.infer<typeof workSchema>;
