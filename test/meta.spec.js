import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/meta.json' with { type: 'json' };

test('meta - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.metaValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('meta - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.metaInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('meta.canonical - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.canonicalValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('meta.canonical - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.canonicalInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('meta.version - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.versionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('meta.version - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.versionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('meta.lastModified - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.lastModifiedValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('meta.lastModified - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.lastModifiedInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
