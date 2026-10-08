import { z } from 'zod';
import { iso8601Schema } from './iso8601';

/**
 * Project entry
 */
export const projectSchema = z
  .object({
    name: z.string().describe('e.g. The World Wide Web').optional(),
    description: z
      .string()
      .describe('Short summary of project. e.g. Collated works of 2017.')
      .optional(),
    highlights: z
      .array(z.string().describe('e.g. Directs you close but not quite there'))
      .describe('Specify multiple features')
      .optional(),
    keywords: z
      .array(z.string().describe('e.g. AngularJS'))
      .describe('Specify special elements involved')
      .optional(),
    startDate: iso8601Schema.optional(),
    endDate: iso8601Schema.optional(),
    url: z
      .string()
      .url()
      .describe(
        'e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html',
      )
      .optional(),
    roles: z
      .array(z.string().describe('e.g. Team Lead, Speaker, Writer'))
      .describe('Specify your role on this project or in company')
      .optional(),
    entity: z
      .string()
      .describe(
        "Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'",
      )
      .optional(),
    type: z
      .string()
      .describe(
        " e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'",
      )
      .optional(),
  })
  .passthrough();

export type Project = z.infer<typeof projectSchema>;
