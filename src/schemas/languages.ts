import { z } from 'zod';

/**
 * Language proficiency entry
 */
export const languageSchema = z
  .object({
    language: z.string().describe('e.g. English, Spanish').optional(),
    fluency: z.string().describe('e.g. Fluent, Beginner').optional(),
  })
  .passthrough();

export type Language = z.infer<typeof languageSchema>;
