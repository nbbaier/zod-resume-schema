import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/interests.json' with { type: 'json' };

test('interests - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.interestsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('interests - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.interestsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('interests[].name - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('interests[].name - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('interests[].keywords - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('interests[].keywords - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('interests[].keywords[item] - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('interests[].keywords[item] - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
