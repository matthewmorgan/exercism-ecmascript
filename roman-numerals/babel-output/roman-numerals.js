'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var ROMANS = {
  1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  10: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  100: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  1000: ['', 'M', 'MM', 'MMM']
};

exports['default'] = function (decimal) {
  return [].concat(_toConsumableArray(decimal.toString())).reduce(function (prev, current, ii, original) {
    return prev + ROMANS[Math.pow(10, original.length - 1 - ii)][+current];
  }, '');
};

module.exports = exports['default'];