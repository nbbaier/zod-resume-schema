import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/skills.json' with { type: 'json' };

test('skills - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.skillsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('skills - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.skillsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('skills[].name - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('skills[].name - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('skills[].level - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.levelValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('skills[].level - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.levelInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('skills[].keywords - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('skills[].keywords - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('skills[].keywords[item] - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('skills[].keywords[item] - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
