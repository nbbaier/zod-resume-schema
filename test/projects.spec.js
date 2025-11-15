import { test, expect } from "vitest";
import { validate } from "../validator.js";
import fixtures from "./__test__/projects.json" with { type: "json" };

test("projects - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.projectsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.projectsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].name - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].name - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].description - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].description - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].highlights - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].highlights - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].highlights[item] - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].highlights[item] - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].keywords - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].keywords - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    console.log("debugging invalid roles", err, valid);

    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].keywords[item] - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].keywords[item] - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].startDate - valid [YYYY-MM-DD]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].startDate - valid [YYYY-MM]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].startDate - valid [YYYY]", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].startDate - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].endDate - valid [YYYY-MM-DD]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].endDate - valid [YYYY-MM]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].endDate - valid [YYYY]", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].endDate - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].roles - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.rolesValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].roles - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.rolesInvalid, (err, valid) => {
    console.log("debugging invalid roles", err, valid);
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].roles[item] - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.rolesItemValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].roles[item] - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.rolesItemInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].entity - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.entityValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].entity - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.entityInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test("projects[].type - valid", () => {
  return new Promise((resolve) => {
  validate(fixtures.typeValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test("projects[].type - invalid", () => {
  return new Promise((resolve) => {
  validate(fixtures.typeInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
