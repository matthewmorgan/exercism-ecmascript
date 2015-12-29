'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function (binary) {
  var b = binary.match(/[^01]/) ? '0' : binary;
  return {
    toDecimal: function toDecimal() {
      return [].concat(_toConsumableArray(b)).reduce(function (acc, curr) {
        return acc * 2 + parseInt(curr);
      }, 0);
    }
  };
};

;
module.exports = exports['default'];