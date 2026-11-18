import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/languages.json' with { type: 'json' };

test('languages - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.languagesValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('languages - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.languagesInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('languages[].language - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.languageValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('languages[].language - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.languageInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('languages[].fluency - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.fluencyValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('languages[].fluency - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.fluencyInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
