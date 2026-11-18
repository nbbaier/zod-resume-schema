import { test, expect } from 'vitest';
import { validate } from '../validator.js';
import fixtures from './__test__/dates.json' with { type: 'json' };

test.each([
  ['YYYY-MM-DD', fixtures.yearMonthDay],
  ['YYYY-MM', fixtures.yearMonth],
  ['YYYY', fixtures.year],
])('dates - %s', (_format, date) => {
  validate({ work: [{ startDate: date }] }, (err, valid) => {
    expect(err).toBeNull();
    expect(valid).toBe(true);
  });
});

test('dates - invalid', () => {
  validate({ work: [{ startDate: fixtures.invalid }] }, (err, valid) => {
    expect(valid).toBe(false);
    expect(err).toStrictEqual([
      expect.objectContaining({ path: ['work', '0', 'startDate'] }),
    ]);
  });
});
