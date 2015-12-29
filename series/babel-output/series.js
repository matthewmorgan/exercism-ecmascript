'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Series = (function () {
  function Series(numberString) {
    _classCallCheck(this, Series);

    this.numberString = numberString;
    this.digits = this.getDigits();
  }

  _createClass(Series, [{
    key: 'getDigits',
    value: function getDigits() {
      return [].concat(_toConsumableArray(this.numberString)).map(function (digit) {
        return parseInt(digit, 10);
      });
    }
  }, {
    key: 'slices',
    value: function slices(sliceSize) {
      var result = [];
      var slice = [];

      if (sliceSize > this.digits.length) {
        throw new Error('Slice size is too big.');
      }

      for (var i = 0; i < this.digits.length - sliceSize + 1; i++) {
        for (var j = 0; j < sliceSize; j++) {
          slice.push(this.digits[i + j]);
        }
        result.push(slice);
        slice = [];
      }

      return result;
    }
  }]);

  return Series;
})();

exports['default'] = Series;
module.exports = exports['default'];