"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return {
    "for": function _for(num) {
      var factors = [];
      var currentFactor = 2;

      while (num !== 1) {
        if (num % currentFactor === 0) {
          factors.push(currentFactor);
          num /= currentFactor;
          currentFactor = 2;
        } else {
          currentFactor++;
        }
      }
      return factors;
    }
  };
};

module.exports = exports["default"];