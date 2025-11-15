import { z } from 'zod';

/**
 * Language proficiency entry
 */
export const languageSchema = z
  .object({
    /** e.g. English, Spanish */
    language: z.string().optional(),
    /** e.g. Fluent, Beginner */
    fluency: z.string().optional(),
  })
  .passthrough();

export type Language = z.infer<typeof languageSchema>;
