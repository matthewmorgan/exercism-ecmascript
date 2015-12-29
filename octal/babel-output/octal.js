'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function (input) {
  var o = input.match(/[^0-7]/) ? '0' : input;
  return {
    toDecimal: function toDecimal() {
      return [].concat(_toConsumableArray(o)).reduce(function (dec, digit) {
        return +digit + dec * 8;
      }, 0);
    }
  };
};

module.exports = exports['default'];