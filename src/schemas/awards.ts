import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Award entry
 */
export const awardSchema = z
  .object({
    /** e.g. One of the 100 greatest minds of the century */
    title: z.string().optional(),
    date: iso8601Schema.optional(),
    /** e.g. Time Magazine */
    awarder: z.string().optional(),
    /** e.g. Received for my work with Quantum Physics */
    summary: z.string().optional(),
  })
  .passthrough();

export type Award = z.infer<typeof awardSchema>;
