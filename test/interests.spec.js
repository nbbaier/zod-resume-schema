import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/interests.json' with { type: 'json' };

describe('interests', () => {
  it('interests - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.interestsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('interests - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.interestsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('interests[].name - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('interests[].name - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('interests[].keywords - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('interests[].keywords - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('interests[].keywords[item] - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('interests[].keywords[item] - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
