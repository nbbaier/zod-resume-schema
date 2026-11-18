import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/volunteer.json' with { type: 'json' };

test('volunteer - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.volunteerValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.volunteerInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('volunteer[].organization - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.organizationValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].organization - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.organizationInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('volunteer[].position - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.positionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].position - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.positionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('volunteer[].url - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].url - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('volunteer[].startDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].startDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].startDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].startDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('volunteer[].endDate - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('volunteer[].endDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
