import { describe, expect, it } from 'vitest';
import { validateJob, parseJob } from '../dist/validator.js';
import sampleJob from '../sample.job.json' with { type: 'json' };

describe('job', () => {
  it('job schema - valid sample job', () => {
    const result = validateJob(sampleJob);
    expect(result.valid).toBe(true);
    expect(result.errors).toBeUndefined();
    expect(result.data).toBeDefined();
  });

  it('job schema - valid with minimal fields', () => {
    const minimalJob = {
      title: 'Software Engineer',
    };
    const result = validateJob(minimalJob);
    expect(result.valid).toBe(true);
  });

  it('job schema - valid with all fields', () => {
    const completeJob = {
      title: 'Web Developer',
      company: 'Tech Corp',
      type: 'Full-time',
      date: '2024-07',
      description: 'Great opportunity',
      location: {
        city: 'San Francisco',
        countryCode: 'US',
      },
      remote: 'Hybrid',
      salary: '120000',
      experience: 'Senior',
      responsibilities: ['Build features', 'Review code'],
      qualifications: ['CS degree', '5 years experience'],
      skills: [
        {
          name: 'JavaScript',
          level: 'Expert',
          keywords: ['React', 'Node.js'],
        },
      ],
      meta: {
        version: 'v1.0.0',
      },
    };
    const result = validateJob(completeJob);
    expect(result.valid).toBe(true);
    expect(result.data).toBeDefined();
  });

  it('job schema - invalid remote value', () => {
    const invalidJob = {
      title: 'Developer',
      // Should be Full, Hybrid, or None
      remote: 'InvalidValue',
    };
    const result = validateJob(invalidJob);
    expect(result.valid).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('job schema - invalid date format', () => {
    const invalidJob = {
      title: 'Developer',
      // Should be YYYY-MM-DD or YYYY-MM or YYYY
      date: '2024/07/15',
    };
    const result = validateJob(invalidJob);
    expect(result.valid).toBe(false);
    expect(result.errors).toBeDefined();
  });

  it('job schema - invalid skills type', () => {
    const invalidJob = {
      title: 'Developer',
      // Should be an array
      skills: 'JavaScript',
    };
    const result = validateJob(invalidJob);
    expect(result.valid).toBe(false);
    expect(result.errors).toBeDefined();
  });

  it('job schema - parseJob throws on invalid data', () => {
    const invalidJob = {
      title: 'Developer',
      remote: 'InvalidValue',
    };
    expect(() => parseJob(invalidJob)).toThrow('Invalid option');
  });

  it('job schema - parseJob returns typed data on valid input', () => {
    const validJob = {
      title: 'Software Engineer',
      company: 'Tech Corp',
    };
    const parsed = parseJob(validJob);
    expect(parsed.title).toBe('Software Engineer');
    expect(parsed.company).toBe('Tech Corp');
  });

  it('job schema - allows additional properties (passthrough)', () => {
    const jobWithExtra = {
      title: 'Developer',
      customField: 'custom value',
      anotherField: 123,
    };
    const result = validateJob(jobWithExtra);
    expect(result.valid).toBe(true);
    expect(result.data.customField).toBe('custom value');
    expect(result.data.anotherField).toBe(123);
  });
});
