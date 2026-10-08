import { z } from 'zod';

/**
 * Location information
 */
export const locationSchema = z
  .object({
    address: z
      .string()
      .describe(
        'To add multiple address lines, use \\n. For example, 1234 Glücklichkeit Straße\\nHinterhaus 5. Etage li.',
      )
      .optional(),
    postalCode: z.string().optional(),
    city: z.string().optional(),
    countryCode: z
      .string()
      .describe('code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN')
      .optional(),
    region: z
      .string()
      .describe(
        'The general region where you live. Can be a US state, or a province, for instance.',
      )
      .optional(),
  })
  .passthrough();

export type Location = z.infer<typeof locationSchema>;

/**
 * Social network profile
 */
export const profileSchema = z
  .object({
    network: z.string().describe('e.g. Facebook or Twitter').optional(),
    username: z.string().describe('e.g. neutralthoughts').optional(),
    url: z
      .string()
      .url()
      .describe('e.g. http://twitter.example.com/neutralthoughts')
      .optional(),
  })
  .passthrough();

export type Profile = z.infer<typeof profileSchema>;

/**
 * Basic personal information
 */
export const basicsSchema = z
  .object({
    name: z.string().optional(),
    label: z.string().describe('e.g. Web Developer').optional(),
    image: z
      .string()
      .describe('URL (as per RFC 3986) to a image in JPEG or PNG format')
      .optional(),
    email: z.string().email().describe('e.g. thomas@gmail.com').optional(),
    phone: z
      .string()
      .describe(
        'Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923',
      )
      .optional(),
    url: z
      .string()
      .url()
      .describe('URL (as per RFC 3986) to your website, e.g. personal homepage')
      .optional(),
    summary: z
      .string()
      .describe('Write a short 2-3 sentence biography about yourself')
      .optional(),
    location: locationSchema.optional(),
    profiles: z
      .array(profileSchema)
      .describe('Specify any number of social networks that you participate in')
      .optional(),
  })
  .passthrough();

export type Basics = z.infer<typeof basicsSchema>;
