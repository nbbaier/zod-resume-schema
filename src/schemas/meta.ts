import { z } from 'zod';

/**
 * The schema version and any other tooling configuration
 */
export const metaSchema = z
  .object({
    /** URL (as per RFC 3986) to latest version of this document */
    canonical: z.string().url().optional(),
    /** A version field which follows semver - e.g. v1.0.0 */
    version: z.string().optional(),
    /** Using ISO 8601 with YYYY-MM-DDThh:mm:ss */
    lastModified: z.string().optional(),
  })
  .passthrough();

export type Meta = z.infer<typeof metaSchema>;
