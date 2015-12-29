// see http://stackoverflow.com/questions/15593428
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (n) {
  return {
    squareOfSums: Math.pow(n * (n + 1) / 2, 2),
    sumOfSquares: Math.pow(n, 3) / 3 + Math.pow(n, 2) / 2 + n / 6,
    difference: -(3 * Math.pow(n, 2) + 2 * n) * (1 - Math.pow(n, 2)) / 12
  };
};

module.exports = exports["default"];