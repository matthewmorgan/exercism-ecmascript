'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BASE = 16,
    HEXES = '0123456789abcdef',
    PATTERN = /[0-9a-f]+/g;

var Hexadecimal = (function () {
  function Hexadecimal(input) {
    _classCallCheck(this, Hexadecimal);

    this.input = input.toLowerCase().match(PATTERN)[0];
    this.input.length !== input.length ? this.input = '' : {};
  }

  _createClass(Hexadecimal, [{
    key: 'toDecimal',
    value: function toDecimal() {
      return [].concat(_toConsumableArray(this.input)).reduce(function (decTotal, hexDigit) {
        return decTotal * BASE + HEXES.indexOf(hexDigit);
      }, 0);
    }
  }]);

  return Hexadecimal;
})();

exports['default'] = Hexadecimal;
module.exports = exports['default'];