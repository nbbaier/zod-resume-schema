import { test, expect } from 'vitest';
import { Validator } from 'jsonschema';
import fixtures from './__test__/dates.json' with { type: 'json' };

const mockDateSchema = {
  type: "string",
  description: "Mock Date Format",
  pattern:
    "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$",
};

function dateValidate(resumeJson, callback) {
  const v = new Validator();

  const validation = v.validate(resumeJson, mockDateSchema);

  if (!validation.valid) {
    return callback(validation.errors, false);
  }

  return callback(null, true);
}

test("dates - YYYY-MM-DD", () => {
  return new Promise((resolve) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("dates - YYYY-MM", () => {
  return new Promise((resolve) => {
  dateValidate(fixtures.yearMonth, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("dates - YYYY", () => {
  return new Promise((resolve) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("dates - invalid", () => {
  return new Promise((resolve) => {
  dateValidate(fixtures.invalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
