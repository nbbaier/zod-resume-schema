import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/education.json' with { type: 'json' };

test('eductaion - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.educationValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.educationInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].institution - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.institutionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].institution - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.institutionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].area - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.areaValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].area - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.areaInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].studyType - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.studyTypeValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].studyType - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.studyTypeInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].startDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].startDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].startDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].startDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.startDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].endDate - valid [YYYY-MM-DD]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].endDate - valid [YYYY-MM]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid2, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].endDate - valid [YYYY]', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateValid3, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].endDate - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.endDateInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].score - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.scoreValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].score - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.scoreInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].courses - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.coursesValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].courses - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.coursesInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('education[].courses[item] - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.coursesItemValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('education[].courses[item] - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.coursesItemInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
