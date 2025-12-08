import { test, expect } from 'vitest';
import { validateJob, parseJob } from '../dist/validator.js';
import sampleJob from '../sample.job.json' with { type: 'json' };

test('job schema - valid sample job', () => {
  const result = validateJob(sampleJob);
  expect(result.valid).toBe(true);
  expect(result.errors).toBeUndefined();
  expect(result.data).toBeDefined();
});

test('job schema - valid with minimal fields', () => {
  const minimalJob = {
    title: 'Software Engineer',
  };
  const result = validateJob(minimalJob);
  expect(result.valid).toBe(true);
});

test('job schema - valid with all fields', () => {
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

test('job schema - invalid remote value', () => {
  const invalidJob = {
    title: 'Developer',
    remote: 'InvalidValue', // Should be Full, Hybrid, or None
  };
  const result = validateJob(invalidJob);
  expect(result.valid).toBe(false);
  expect(result.errors).toBeDefined();
  expect(result.errors.length).toBeGreaterThan(0);
});

test('job schema - invalid date format', () => {
  const invalidJob = {
    title: 'Developer',
    date: '2024/07/15', // Should be YYYY-MM-DD or YYYY-MM or YYYY
  };
  const result = validateJob(invalidJob);
  expect(result.valid).toBe(false);
  expect(result.errors).toBeDefined();
});

test('job schema - invalid skills type', () => {
  const invalidJob = {
    title: 'Developer',
    skills: 'JavaScript', // Should be an array
  };
  const result = validateJob(invalidJob);
  expect(result.valid).toBe(false);
  expect(result.errors).toBeDefined();
});

test('job schema - parseJob throws on invalid data', () => {
  const invalidJob = {
    title: 'Developer',
    remote: 'InvalidValue',
  };
  expect(() => parseJob(invalidJob)).toThrow();
});

test('job schema - parseJob returns typed data on valid input', () => {
  const validJob = {
    title: 'Software Engineer',
    company: 'Tech Corp',
  };
  const parsed = parseJob(validJob);
  expect(parsed.title).toBe('Software Engineer');
  expect(parsed.company).toBe('Tech Corp');
});

test('job schema - allows additional properties (passthrough)', () => {
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
