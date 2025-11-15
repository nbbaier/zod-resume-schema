import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/basics.json' with { type: 'json' };

test('basics - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.basicsValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.basicsInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.name - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.name - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.label - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.labelValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.label - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.labelInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.image - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.imageValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.image - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.imageInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.email - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.emailValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.email - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.emailInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.phone - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.phoneValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.phone - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.phoneInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.url - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.url - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.summary - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.summary - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location.address - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationAddressValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location.address - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationAddressInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location.postal - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationPostalValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location.postal - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationPostalInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location.city - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationCityValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location.city - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationCityInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location.country - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationCountryValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location.country - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationCountryInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.location.region - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationRegionValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.location.region - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.locationRegionInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.profiles - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.profiles - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.profiles[].network - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesNetworkValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.profiles[].network - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesNetworkInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.profiles[].username - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesUsernameValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.profiles[].username - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesUsernameInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});

test('basics.profiles[].url - valid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesUrlValid, (err, valid) => {
    expect(err).toBe(null);
    expect(valid).toBe(true);
      resolve();
  });
  });
});

test('basics.profiles[].url - invalid', () => {
  return new Promise((resolve) => {
  validate(fixtures.profilesUrlInvalid, (err, valid) => {
    expect(err).not.toBe(null);
    expect(valid).toBe(false);
      resolve();
  });
  });
});
