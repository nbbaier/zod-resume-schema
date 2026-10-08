import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Certificate entry
 */
export const certificateSchema = z
  .object({
    name: z
      .string()
      .describe('e.g. Certified Kubernetes Administrator')
      .optional(),
    date: iso8601Schema.optional(),
    url: z.string().url().describe('e.g. http://example.com').optional(),
    issuer: z.string().describe('e.g. CNCF').optional(),
  })
  .passthrough();

export type Certificate = z.infer<typeof certificateSchema>;
