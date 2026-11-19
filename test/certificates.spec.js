import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/certificates.json' with { type: 'json' };

describe('certificates', () => {
  it('certificates - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.certificatesValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.certificatesInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('certificates[].name - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].name - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('certificates[].date - valid [YYYY-MM-DD]', () =>
    new Promise((resolve) => {
      validate(fixtures.dateValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].date - valid [YYYY-MM]', () =>
    new Promise((resolve) => {
      validate(fixtures.dateValid2, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].date - valid [YYYY]', () =>
    new Promise((resolve) => {
      validate(fixtures.dateValid3, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].date - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.dateInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('certificates[].url - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.urlValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].url - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.urlInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('certificates[].issuer - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.issuerValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('certificates[].issuer - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.issuerInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
