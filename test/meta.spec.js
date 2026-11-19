import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/meta.json' with { type: 'json' };

describe('meta', () => {
  it('meta - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.metaValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('meta - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.metaInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('meta.canonical - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.canonicalValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('meta.canonical - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.canonicalInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('meta.version - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.versionValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('meta.version - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.versionInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('meta.lastModified - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.lastModifiedValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('meta.lastModified - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.lastModifiedInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
