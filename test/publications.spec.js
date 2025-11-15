import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/publications.json' with { type: 'json' };

test('publications - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.publicationsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.publicationsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('publications[].name - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].name - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('publications[].publisher - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.publisherValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].publisher - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.publisherInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('publications[].releaseDate - valid [YYYY-MM-DD]', () => {
  return new Promise((resolve) => {
  validate(fixtures.releaseDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].releaseDate - valid [YYYY-MM]', () => {
  return new Promise((resolve) => {
  validate(fixtures.releaseDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].releaseDate - valid [YYYY]', () => {
  return new Promise((resolve) => {
  validate(fixtures.releaseDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].releaseDate - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.releaseDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('publications[].url - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].url - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('publications[].summary - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('publications[].summary - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
