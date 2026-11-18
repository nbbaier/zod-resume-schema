import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/work.json' with { type: 'json' };

test('work - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.workValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.workInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].name - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].name - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].location - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].location - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].description - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.descriptionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].description - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.descriptionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].position - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.positionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].position - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.positionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].url - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].url - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].startDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].startDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].startDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].startDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].endDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].endDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].endDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].endDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].summary - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].summary - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].highlights - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.highlightsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].highlights - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.highlightsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('work[].highlights[item] - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.highlightsItemValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('work[].highlights[item] - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.highlightsItemInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
