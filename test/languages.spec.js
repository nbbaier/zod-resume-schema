import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/languages.json' with { type: 'json' };

test('languages - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.languagesValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('languages - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.languagesInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('languages[].language - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.languageValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('languages[].language - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.languageInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('languages[].fluency - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.fluencyValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('languages[].fluency - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.fluencyInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
