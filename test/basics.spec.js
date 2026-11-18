import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/basics.json' with { type: 'json' };

test('basics - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.basicsValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.basicsInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.name - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.name - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.nameInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.label - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.labelValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.label - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.labelInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.image - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.imageValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.image - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.imageInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.email - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.emailValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.email - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.emailInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.phone - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.phoneValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.phone - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.phoneInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.url - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.url - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.urlInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.summary - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.summary - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.summaryInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location.address - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationAddressValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location.address - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationAddressInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location.postal - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationPostalValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location.postal - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationPostalInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location.city - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationCityValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location.city - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationCityInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location.country - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationCountryValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location.country - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationCountryInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.location.region - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationRegionValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.location.region - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.locationRegionInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.profiles - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.profiles - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.profiles[].network - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesNetworkValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.profiles[].network - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesNetworkInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.profiles[].username - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesUsernameValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.profiles[].username - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesUsernameInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));

test('basics.profiles[].url - valid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesUrlValid, (err, valid) => {
      expect(err).toBeNull();
      expect(valid).toBe(true);
      resolve();
    });
  }));

test('basics.profiles[].url - invalid', () =>
  new Promise((resolve) => {
    validate(fixtures.profilesUrlInvalid, (err, valid) => {
      expect(err).not.toBeNull();
      expect(valid).toBe(false);
      resolve();
    });
  }));
