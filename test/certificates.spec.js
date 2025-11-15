import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/certificates.json' with { type: 'json' };

test('certificates - valid', () => {
  return new Promise((resolve) => {
    validate(fixtures.certificatesValid, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates - invalid', () => {
  return new Promise((resolve) => {
    validate(fixtures.certificatesInvalid, (err, valid) => {
      expect(err).not.toBe(null);
      expect(valid).toBe(false);
      resolve();
    });
  });
});

test('certificates[].name - valid', () => {
  return new Promise((resolve) => {
    validate(fixtures.nameValid, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].name - invalid', () => {
  return new Promise((resolve) => {
    validate(fixtures.nameInvalid, (err, valid) => {
      expect(err).not.toBe(null);
      expect(valid).toBe(false);
      resolve();
    });
  });
});

test('certificates[].date - valid [YYYY-MM-DD]', () => {
  return new Promise((resolve) => {
    validate(fixtures.dateValid, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].date - valid [YYYY-MM]', () => {
  return new Promise((resolve) => {
    validate(fixtures.dateValid2, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].date - valid [YYYY]', () => {
  return new Promise((resolve) => {
    validate(fixtures.dateValid3, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].date - invalid', () => {
  return new Promise((resolve) => {
    validate(fixtures.dateInvalid, (err, valid) => {
      expect(err).not.toBe(null);
      expect(valid).toBe(false);
      resolve();
    });
  });
});

test('certificates[].url - valid', () => {
  return new Promise((resolve) => {
    validate(fixtures.urlValid, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].url - invalid', () => {
  return new Promise((resolve) => {
    validate(fixtures.urlInvalid, (err, valid) => {
      expect(err).not.toBe(null);
      expect(valid).toBe(false);
      resolve();
    });
  });
});

test('certificates[].issuer - valid', () => {
  return new Promise((resolve) => {
    validate(fixtures.issuerValid, (err, valid) => {
      expect(err).toBe(null);
      expect(valid).toBe(true);
      resolve();
    });
  });
});

test('certificates[].issuer - invalid', () => {
  return new Promise((resolve) => {
    validate(fixtures.issuerInvalid, (err, valid) => {
      expect(err).not.toBe(null);
      expect(valid).toBe(false);
      resolve();
    });
  });
});
