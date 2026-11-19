import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/references.json' with { type: 'json' };

describe('references', () => {
  it('references - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.referencesValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('references - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.referencesInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('references[].name - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('references[].name - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('references[].reference - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.referenceValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('references[].reference - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.referenceInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
