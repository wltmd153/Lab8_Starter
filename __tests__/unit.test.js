// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('isPhoneNumberBraclet', () => {
    expect(functions.isPhoneNumber('(111)-111-1111')).toBe(true);
});

test('isPhoneNumberFalse', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});

test('isPhoneNumberFalse2', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
test('isDateLeapYear', () => {
    expect(functions.isDate('2/29/2222')).toBe(true);
});
test('isDateFalse', () => {
    expect(functions.isDate('111/1/1111')).toBe(false);
});
test('isDateFalse2', () => {
    expect(functions.isDate('111111')).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail('1@google.com')).toBe(true);
});
test('isEmailucsd', () => {
    expect(functions.isEmail('1@ucsd.edu')).toBe(true);
});
test('isEmailFalse', () => {
    expect(functions.isEmail('1ucsd.edu')).toBe(false);
});
test('isEmailFalse2', () => {
    expect(functions.isEmail('1@ucsdedu')).toBe(false);
});

test('isHex', () => {
    expect(functions.isHexColor('#111111')).toBe(true);
});
test('isHexAlpha', () => {
    expect(functions.isHexColor('#AAAAAA')).toBe(true);
});
test('isHexFalse', () => {
    expect(functions.isHexColor('JJJJJJ')).toBe(false);
});
test('isHexFalse2', () => {
    expect(functions.isHexColor('#1111111')).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword('al4d1kmalskdm23')).toBe(true);
});
test('isStrongPassword2', () => {
    expect(functions.isStrongPassword('hs23sa1')).toBe(true);
});
test('isStrongPasswordFalse', () => {
    expect(functions.isStrongPassword('1111111111')).toBe(false);
});
test('isStrongPasswordFalse2', () => {
    expect(functions.isStrongPassword('1')).toBe(false);
});
// TODO - Part 2