import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/languages.json' with { type: 'json' };

describe('languages', () => {
  it('languages - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.languagesValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('languages - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.languagesInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('languages[].language - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.languageValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('languages[].language - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.languageInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('languages[].fluency - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.fluencyValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('languages[].fluency - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.fluencyInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
