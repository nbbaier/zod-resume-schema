import { z } from 'zod';

/**
 * Reference entry
 */
export const referenceSchema = z
  .object({
    /** e.g. Timothy Cook */
    name: z.string().optional(),
    /** e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing. */
    reference: z.string().optional(),
  })
  .passthrough();

export type Reference = z.infer<typeof referenceSchema>;
