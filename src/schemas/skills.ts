import { z } from 'zod';

/**
 * Skill entry
 */
export const skillSchema = z
  .object({
    name: z.string().describe('e.g. Web Development').optional(),
    level: z.string().describe('e.g. Master').optional(),
    keywords: z
      .array(z.string().describe('e.g. HTML'))
      .describe('List some keywords pertaining to this skill')
      .optional(),
  })
  .passthrough();

export type Skill = z.infer<typeof skillSchema>;
