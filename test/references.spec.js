import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/references.json' with { type: 'json' };

test('references - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.referencesValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('references - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.referencesInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('references[].name - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('references[].name - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('references[].reference - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.referenceValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('references[].reference - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.referenceInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
