import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Award entry
 */
export const awardSchema = z
  .object({
    title: z
      .string()
      .describe('e.g. One of the 100 greatest minds of the century')
      .optional(),
    date: iso8601Schema.optional(),
    awarder: z.string().describe('e.g. Time Magazine').optional(),
    summary: z
      .string()
      .describe('e.g. Received for my work with Quantum Physics')
      .optional(),
  })
  .passthrough();

export type Award = z.infer<typeof awardSchema>;
