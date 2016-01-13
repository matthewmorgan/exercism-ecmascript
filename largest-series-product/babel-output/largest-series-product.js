'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Series = (function () {
  function Series(numString) {
    _classCallCheck(this, Series);

    this.digits = [].concat(_toConsumableArray(numString)).map(function (digit) {
      return +digit;
    });
  }

  _createClass(Series, [{
    key: 'slices',
    value: function slices(size) {
      var result = [];
      for (var ii = 0; ii <= this.digits.length - size; ii++) {
        result.push(this.digits.slice(ii, ii + size));
      }
      return result;
    }
  }, {
    key: 'largestProduct',
    value: function largestProduct(size) {
      if (size > this.digits.length) throw new Error('Slice size is too big.');
      return this.slices(size).map(function (tuple) {
        return tuple.reduce(function (prev, curr) {
          return prev *= curr;
        }, 1);
      }, []).sort(function (a, b) {
        return b - a;
      })[0];
    }
  }]);

  return Series;
})();

exports['default'] = Series;
module.exports = exports['default'];