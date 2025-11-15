import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/meta.json' with { type: 'json' };

test('meta - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.metaValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('meta - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.metaInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('meta.canonical - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.canonicalValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('meta.canonical - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.canonicalInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('meta.version - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.versionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('meta.version - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.versionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('meta.lastModified - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.lastModifiedValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('meta.lastModified - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.lastModifiedInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
