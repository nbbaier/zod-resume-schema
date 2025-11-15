import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/education.json' with { type: 'json' };

test('eductaion - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.educationValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.educationInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].institution - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.institutionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].institution - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.institutionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].area - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.areaValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].area - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.areaInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].studyType - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.studyTypeValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].studyType - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.studyTypeInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].startDate - valid [YYYY-MM-DD]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].startDate - valid [YYYY-MM]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].startDate - valid [YYYY]', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].startDate - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].endDate - valid [YYYY-MM-DD]', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].endDate - valid [YYYY-MM]', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].endDate - valid [YYYY]', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].endDate - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].score - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.scoreValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].score - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.scoreInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].courses - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.coursesValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].courses - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.coursesInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('education[].courses[item] - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.coursesItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('education[].courses[item] - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.coursesItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
