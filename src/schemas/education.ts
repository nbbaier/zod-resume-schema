import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Education entry
 */
export const educationSchema = z
  .object({
    institution: z
      .string()
      .describe('e.g. Massachusetts Institute of Technology')
      .optional(),
    url: z
      .string()
      .url()
      .describe('e.g. http://facebook.example.com')
      .optional(),
    area: z.string().describe('e.g. Arts').optional(),
    studyType: z.string().describe('e.g. Bachelor').optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    score: z.string().describe('grade point average, e.g. 3.67/4.0').optional(),
    courses: z
      .array(
        z.string().describe('e.g. H1302 - Introduction to American history'),
      )
      .describe('List notable courses/subjects')
      .optional(),
  })
  .passthrough();

export type Education = z.infer<typeof educationSchema>;
