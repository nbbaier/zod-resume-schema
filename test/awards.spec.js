import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/awards.json' with { type: 'json' };

test("awards - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.awardsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.awardsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("awards[].title - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.titleValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].title - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.titleInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("awards[].date - valid [YYYY-MM-DD]", () => {
  return new Promise((resolve) => {
  validate(fixtures.dateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].date - valid [YYYY-MM]", () => {
  return new Promise((resolve) => {
  validate(fixtures.dateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].date - valid [YYYY]", () => {
  return new Promise((resolve) => {
  validate(fixtures.dateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].date - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.dateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("awards[].awarder - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.awarderValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].awarder - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.awarderInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("awards[].summary - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("awards[].summary - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
