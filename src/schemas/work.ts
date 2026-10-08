import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Work experience entry
 */
export const workSchema = z
  .object({
    name: z.string().describe('e.g. Facebook').optional(),
    location: z.string().describe('e.g. Menlo Park, CA').optional(),
    description: z.string().describe('e.g. Social Media Company').optional(),
    position: z.string().describe('e.g. Software Engineer').optional(),
    url: z
      .string()
      .url()
      .describe('e.g. http://facebook.example.com')
      .optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    summary: z
      .string()
      .describe('Give an overview of your responsibilities at the company')
      .optional(),
    highlights: z
      .array(
        z
          .string()
          .describe(
            'e.g. Increased profits by 20% from 2011-2012 through viral advertising',
          ),
      )
      .describe('Specify multiple accomplishments')
      .optional(),
  })
  .passthrough();

export type Work = z.infer<typeof workSchema>;
