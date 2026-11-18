import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/publications.json' with { type: 'json' };

test('publications - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.publicationsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.publicationsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('publications[].name - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].name - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('publications[].publisher - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.publisherValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].publisher - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.publisherInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('publications[].releaseDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.releaseDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].releaseDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.releaseDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].releaseDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.releaseDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].releaseDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.releaseDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('publications[].url - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].url - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('publications[].summary - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('publications[].summary - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
