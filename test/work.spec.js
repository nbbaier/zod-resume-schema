import { test, expect } from "vitest";
import { validate } from "../validator.js";
import fixtures from "./__test__/work.json" with { type: "json" };

test("work - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.workValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.workInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].name - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].name - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].location - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.locationValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].location - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].description - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].description - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].position - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.positionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].position - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.positionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].url - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.urlValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].url - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].startDate - valid [YYYY-MM-DD]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].startDate - valid [YYYY-MM]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].startDate - valid [YYYY]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].startDate - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].endDate - valid [YYYY-MM-DD]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].endDate - valid [YYYY-MM]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].endDate - valid [YYYY]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].endDate - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].summary - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].summary - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].highlights - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].highlights - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("work[].highlights[item] - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("work[].highlights[item] - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
