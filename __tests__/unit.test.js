// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('isPhoneNumber should return true for valid phone numbers', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
  expect(isPhoneNumber('925-925-9250')).toBe(true);
});

test('isPhoneNumber should return false for invalid phone numbers', () => {
  expect(isPhoneNumber('0912380912321312')).toBe(false);
  expect(isPhoneNumber('7')).toBe(false);
});

test('isEmail should return true for valid emails', () => {
  expect(isEmail('hi@gmail.com')).toBe(true);
  expect(isEmail('123@test.gov')).toBe(true);
});

test('isEmail should return false for invalid emails', () => {
  expect(isEmail('test@g')).toBe(false);
  expect(isEmail('aaa@invalid.com.')).toBe(false);
});

test('isStrongPassword should return true for valid passwords', () => {
  expect(isStrongPassword('Zxc987_')).toBe(true);
  expect(isStrongPassword('A1234567890')).toBe(true);
});

test('isStrongPassword should return false for invalid passwords', () => {
  expect(isStrongPassword('12345678901234567890')).toBe(false);
  expect(isStrongPassword('$1aaszazazaf90_')).toBe(false);
});

test('isDate should return true for valid dates', () => {
  expect(isDate('05/03/2026')).toBe(true);
  expect(isDate('12/31/2026')).toBe(true);
});

test('isDate should return false for invalid dates', () => {
  expect(isDate('2026/12/15')).toBe(false);
  expect(isDate('5/6/27')).toBe(false);
});

test('isHexColor should return true for valid hex colors', () => {
  expect(isHexColor('#0077FF')).toBe(true);
  expect(isHexColor('#ffcccc')).toBe(true);
});

test('isHexColor should return false for invalid hex colors', () => {
  expect(isHexColor('#XXFFFFF')).toBe(false);
  expect(isHexColor('0000000')).toBe(false);
});
