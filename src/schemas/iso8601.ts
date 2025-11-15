import { z } from 'zod';

/**
 * ISO 8601 date format with flexible precision.
 * Supports:
 * - Full date: YYYY-MM-DD (e.g., 2014-06-29)
 * - Year and month: YYYY-MM (e.g., 2023-04)
 * - Year only: YYYY (e.g., 2023)
 */
export const iso8601Schema = z
  .string()
  .regex(
    /^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/,
    'Date must be in ISO 8601 format (YYYY-MM-DD, YYYY-MM, or YYYY)'
  )
  .describe('Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04');

export type Iso8601 = z.infer<typeof iso8601Schema>;
