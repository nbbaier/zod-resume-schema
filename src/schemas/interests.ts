import { z } from 'zod';

/**
 * Interest entry
 */
export const interestSchema = z
  .object({
    /** e.g. Philosophy */
    name: z.string().optional(),
    keywords: z.array(z.string().describe('e.g. Friedrich Nietzsche')).optional(),
  })
  .passthrough();

export type Interest = z.infer<typeof interestSchema>;
