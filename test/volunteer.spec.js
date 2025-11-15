import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/volunteer.json' with { type: 'json' };

test('volunteer - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.volunteerValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.volunteerInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('volunteer[].organization - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.organizationValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].organization - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.organizationInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('volunteer[].position - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.positionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].position - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.positionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('volunteer[].url - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].url - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('volunteer[].startDate - valid [YYYY-MM-DD]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].startDate - valid [YYYY-MM]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].startDate - valid [YYYY]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].startDate - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('volunteer[].endDate - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('volunteer[].endDate - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
