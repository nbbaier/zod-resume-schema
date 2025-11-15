import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Volunteer experience entry
 */
export const volunteerSchema = z
  .object({
    /** e.g. Facebook */
    organization: z.string().optional(),
    /** e.g. Software Engineer */
    position: z.string().optional(),
    /** e.g. http://facebook.example.com */
    url: z.string().url().optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    /** Give an overview of your responsibilities at the company */
    summary: z.string().optional(),
    /** Specify accomplishments and achievements */
    highlights: z
      .array(
        z.string().describe('e.g. Increased profits by 20% from 2011-2012 through viral advertising')
      )
      .optional(),
  })
  .passthrough();

export type Volunteer = z.infer<typeof volunteerSchema>;
