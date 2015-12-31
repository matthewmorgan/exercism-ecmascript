"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sum = function Sum() {
  var factors = arguments.length <= 0 || arguments[0] === undefined ? [3, 5] : arguments[0];

  var self = undefined instanceof Sum ? undefined : Object.getPrototypeOf(Sum);
  self.factors = factors;

  self.to = function (limit) {
    var multiples = {};
    self.factors.forEach(function (factor) {
      for (var ii = factor; ii < limit; ii += factor) {
        multiples[ii] = ii;
      }
    });
    return Object.keys(multiples).reduce(function (prev, curr) {
      return prev += multiples[curr];
    }, 0);
  };
  return self;
};

exports["default"] = Sum;
module.exports = exports["default"];