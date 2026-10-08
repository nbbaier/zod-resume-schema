import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Publication entry
 */
export const publicationSchema = z
  .object({
    name: z.string().describe('e.g. The World Wide Web').optional(),
    publisher: z.string().describe('e.g. IEEE, Computer Magazine').optional(),
    releaseDate: iso8601Schema.optional(),
    url: z
      .string()
      .url()
      .describe(
        'e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html',
      )
      .optional(),
    summary: z
      .string()
      .describe(
        'Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.',
      )
      .optional(),
  })
  .passthrough();

export type Publication = z.infer<typeof publicationSchema>;
