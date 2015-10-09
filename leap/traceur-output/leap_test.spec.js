"use strict";
$traceurRuntime.options.symbols = true;
var $__leap__;
var isLeapYear = ($__leap__ = require("./leap"), $__leap__ && $__leap__.__esModule && $__leap__ || {default: $__leap__}).default;
describe('A leap year', function() {
  it('is not very common', function() {
    expect(isLeapYear(2015)).toBeFalsy();
  });
  it('is introduced every 4 years to adjust about a day', function() {
    expect(isLeapYear(2016)).toBeTruthy();
  });
  it('is skipped every 100 years to remove an extra day', function() {
    expect(isLeapYear(1900)).toBeFalsy();
  });
  it('is reintroduced every 400 years to adjust another day', function() {
    expect(isLeapYear(2000)).toBeTruthy();
  });
  describe('Additional example of a leap year that', function() {
    it('is not a leap year', function() {
      expect(isLeapYear(1978)).toBeFalsy();
    });
    it('is a common leap year', function() {
      expect(isLeapYear(1992)).toBeTruthy();
    });
    it('is skipped every 100 years', function() {
      expect(isLeapYear(2100)).toBeFalsy();
    });
    it('is reintroduced every 400 years', function() {
      expect(isLeapYear(2400)).toBeTruthy();
    });
  });
});
