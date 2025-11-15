import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Certificate entry
 */
export const certificateSchema = z
  .object({
    /** e.g. Certified Kubernetes Administrator */
    name: z.string().optional(),
    date: iso8601Schema.optional(),
    /** e.g. http://example.com */
    url: z.string().url().optional(),
    /** e.g. CNCF */
    issuer: z.string().optional(),
  })
  .passthrough();

export type Certificate = z.infer<typeof certificateSchema>;
