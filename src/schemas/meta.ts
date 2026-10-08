import { z } from 'zod';

/**
 * The schema version and any other tooling configuration
 */
export const metaSchema = z
  .object({
    canonical: z
      .string()
      .url()
      .describe('URL (as per RFC 3986) to latest version of this document')
      .optional(),
    version: z
      .string()
      .describe('A version field which follows semver - e.g. v1.0.0')
      .optional(),
    lastModified: z
      .string()
      .describe('Using ISO 8601 with YYYY-MM-DDThh:mm:ss')
      .optional(),
  })
  .passthrough();

export type Meta = z.infer<typeof metaSchema>;
