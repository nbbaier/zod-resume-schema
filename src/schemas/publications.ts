import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Publication entry
 */
export const publicationSchema = z
  .object({
    /** e.g. The World Wide Web */
    name: z.string().optional(),
    /** e.g. IEEE, Computer Magazine */
    publisher: z.string().optional(),
    releaseDate: iso8601Schema.optional(),
    /** e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html */
    url: z.string().url().optional(),
    /** Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML. */
    summary: z.string().optional(),
  })
  .passthrough();

export type Publication = z.infer<typeof publicationSchema>;
