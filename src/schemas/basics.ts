import { z } from 'zod';

/**
 * Location information
 */
export const locationSchema = z
  .object({
    /** To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li. */
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string().optional(),
    /** code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN */
    countryCode: z.string().optional(),
    /** The general region where you live. Can be a US state, or a province, for instance. */
    region: z.string().optional(),
  })
  .passthrough();

export type Location = z.infer<typeof locationSchema>;

/**
 * Social network profile
 */
export const profileSchema = z
  .object({
    /** e.g. Facebook or Twitter */
    network: z.string().optional(),
    /** e.g. neutralthoughts */
    username: z.string().optional(),
    /** e.g. http://twitter.example.com/neutralthoughts */
    url: z.string().url().optional(),
  })
  .passthrough();

export type Profile = z.infer<typeof profileSchema>;

/**
 * Basic personal information
 */
export const basicsSchema = z
  .object({
    name: z.string().optional(),
    /** e.g. Web Developer */
    label: z.string().optional(),
    /** URL (as per RFC 3986) to a image in JPEG or PNG format */
    image: z.string().optional(),
    /** e.g. thomas@gmail.com */
    email: z.string().email().optional(),
    /** Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923 */
    phone: z.string().optional(),
    /** URL (as per RFC 3986) to your website, e.g. personal homepage */
    url: z.string().url().optional(),
    /** Write a short 2-3 sentence biography about yourself */
    summary: z.string().optional(),
    location: locationSchema.optional(),
    /** Specify any number of social networks that you participate in */
    profiles: z.array(profileSchema).optional(),
  })
  .passthrough();

export type Basics = z.infer<typeof basicsSchema>;
