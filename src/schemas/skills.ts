import { z } from 'zod';

/**
 * Skill entry
 */
export const skillSchema = z
  .object({
    /** e.g. Web Development */
    name: z.string().optional(),
    /** e.g. Master */
    level: z.string().optional(),
    /** List some keywords pertaining to this skill */
    keywords: z.array(z.string().describe('e.g. HTML')).optional(),
  })
  .passthrough();

export type Skill = z.infer<typeof skillSchema>;
