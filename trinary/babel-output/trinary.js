'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function (input) {
  var t = input.match(/[0-2]/) ? input : '0';
  return {
    toDecimal: function toDecimal() {
      return [].concat(_toConsumableArray(t)).reduce(function (dec, digit) {
        return +digit + dec * 3;
      }, 0);
    }
  };
};

module.exports = exports['default'];