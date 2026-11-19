import { describe, expect, it } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/projects.json' with { type: 'json' };

describe('projects', () => {
  it('projects - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.projectsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.projectsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].name - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].name - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.nameInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].description - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.descriptionValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].description - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.descriptionInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].highlights - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.highlightsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].highlights - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.highlightsInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].highlights[item] - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.highlightsItemValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].highlights[item] - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.highlightsItemInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].keywords - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].keywords - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsInvalid, (err, valid) => {
        console.log('debugging invalid roles', err, valid);

        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].keywords[item] - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].keywords[item] - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.keywordsItemInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].startDate - valid [YYYY-MM-DD]', () =>
    new Promise((resolve) => {
      validate(fixtures.startDateValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].startDate - valid [YYYY-MM]', () =>
    new Promise((resolve) => {
      validate(fixtures.startDateValid2, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].startDate - valid [YYYY]', () =>
    new Promise((resolve) => {
      validate(fixtures.startDateValid3, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].startDate - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.startDateInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].endDate - valid [YYYY-MM-DD]', () =>
    new Promise((resolve) => {
      validate(fixtures.endDateValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].endDate - valid [YYYY-MM]', () =>
    new Promise((resolve) => {
      validate(fixtures.endDateValid2, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].endDate - valid [YYYY]', () =>
    new Promise((resolve) => {
      validate(fixtures.endDateValid3, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].endDate - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.endDateInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].roles - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.rolesValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].roles - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.rolesInvalid, (err, valid) => {
        console.log('debugging invalid roles', err, valid);
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].roles[item] - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.rolesItemValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].roles[item] - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.rolesItemInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].entity - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.entityValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].entity - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.entityInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));

  it('projects[].type - valid', () =>
    new Promise((resolve) => {
      validate(fixtures.typeValid, (err, valid) => {
        expect(err).toBeNull();
        expect(valid).toBe(true);
        resolve();
      });
    }));

  it('projects[].type - invalid', () =>
    new Promise((resolve) => {
      validate(fixtures.typeInvalid, (err, valid) => {
        expect(err).not.toBeNull();
        expect(valid).toBe(false);
        resolve();
      });
    }));
});
