import { z } from 'zod';

/**
 * Reference entry
 */
export const referenceSchema = z
  .object({
    name: z.string().describe('e.g. Timothy Cook').optional(),
    reference: z
      .string()
      .describe(
        'e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.',
      )
      .optional(),
  })
  .passthrough();

export type Reference = z.infer<typeof referenceSchema>;
