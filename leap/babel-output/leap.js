"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod = function mod(dividend, divisor) {
  return dividend % divisor;
};
var is = {
  divisibleBy: function divisibleBy(a, b) {
    return mod(a, b) === 0;
  },
  notDivisibleBy: function notDivisibleBy(a, b) {
    return mod(a, b) !== 0;
  }
};

exports["default"] = function (year) {
  return is.divisibleBy(year, 400) || is.divisibleBy(year, 4) && is.notDivisibleBy(year, 100);
};

module.exports = exports["default"];