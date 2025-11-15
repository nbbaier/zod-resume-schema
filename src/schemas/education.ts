import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Education entry
 */
export const educationSchema = z
  .object({
    /** e.g. Massachusetts Institute of Technology */
    institution: z.string().optional(),
    /** e.g. http://facebook.example.com */
    url: z.string().url().optional(),
    /** e.g. Arts */
    area: z.string().optional(),
    /** e.g. Bachelor */
    studyType: z.string().optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    /** grade point average, e.g. 3.67/4.0 */
    score: z.string().optional(),
    /** List notable courses/subjects */
    courses: z
      .array(z.string().describe('e.g. H1302 - Introduction to American history'))
      .optional(),
  })
  .passthrough();

export type Education = z.infer<typeof educationSchema>;
