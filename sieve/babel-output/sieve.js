"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (limit) {
  var p = 2;
  var range = [],
      primes = [];
  for (var ii = 2; ii <= limit; ii++) {
    range[ii] = { val: ii, prime: true };
  }
  ;
  for (var ii = 2; ii <= limit / 2; ii++) {
    for (var jj = 2 * p; jj <= limit; jj += p) {
      range[jj].prime = false;
    }
    p++;
  }
  for (var key in range) {
    range[key].prime ? primes.push(+key) : null;
  }
  return {
    primes: primes
  };
};

module.exports = exports["default"];