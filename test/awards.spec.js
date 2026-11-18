import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/awards.json' with { type: 'json' };

test('awards - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.awardsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.awardsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('awards[].title - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.titleValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].title - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.titleInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('awards[].date - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.dateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].date - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.dateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].date - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.dateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].date - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.dateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('awards[].awarder - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.awarderValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].awarder - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.awarderInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('awards[].summary - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('awards[].summary - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
