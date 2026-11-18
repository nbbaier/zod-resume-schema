import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/interests.json' with { type: 'json' };

test('interests - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.interestsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('interests - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.interestsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('interests[].name - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('interests[].name - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('interests[].keywords - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.keywordsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('interests[].keywords - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.keywordsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('interests[].keywords[item] - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.keywordsItemValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('interests[].keywords[item] - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.keywordsItemInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
