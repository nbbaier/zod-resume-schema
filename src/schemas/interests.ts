import { z } from 'zod';

/**
 * Interest entry
 */
export const interestSchema = z
  .object({
    name: z.string().describe('e.g. Philosophy').optional(),
    keywords: z
      .array(z.string().describe('e.g. Friedrich Nietzsche'))
      .optional(),
  })
  .passthrough();

export type Interest = z.infer<typeof interestSchema>;
