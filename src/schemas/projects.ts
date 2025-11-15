import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Project entry
 */
export const projectSchema = z
  .object({
    /** e.g. The World Wide Web */
    name: z.string().optional(),
    /** Short summary of project. e.g. Collated works of 2017. */
    description: z.string().optional(),
    /** Specify multiple features */
    highlights: z
      .array(z.string().describe('e.g. Directs you close but not quite there'))
      .optional(),
    /** Specify special elements involved */
    keywords: z.array(z.string().describe('e.g. AngularJS')).optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    /** e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html */
    url: z.string().url().optional(),
    /** Specify your role on this project or in company */
    roles: z.array(z.string().describe('e.g. Team Lead, Speaker, Writer')).optional(),
    /** Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ' */
    entity: z.string().optional(),
    /** e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference' */
    type: z.string().optional(),
  })
  .passthrough();

export type Project = z.infer<typeof projectSchema>;
