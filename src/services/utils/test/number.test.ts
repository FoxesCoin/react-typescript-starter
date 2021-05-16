import { round } from '../number';

test('Round number', () => {
  expect(round(31.689)).toBe(31.7);
  expect(round(31.1689)).toBe(31.2);
  expect(round(31.1689, 2)).toBe(31.17);
  expect(round(31, 2)).toBe(31);
});
