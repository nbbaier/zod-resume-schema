import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/skills.json' with { type: 'json' };

describe('skills', () => {
  it('skills - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.skillsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('skills - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.skillsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('skills[].name - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('skills[].name - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('skills[].level - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.levelValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('skills[].level - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.levelInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('skills[].keywords - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('skills[].keywords - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('skills[].keywords[item] - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('skills[].keywords[item] - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
