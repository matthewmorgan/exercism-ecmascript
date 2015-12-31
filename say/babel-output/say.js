'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var PLACENAMES = ['', 'thousand', 'million', 'billion'];

function splitByPowers(num) {
  var m = Math.pow(10, num.toString().length);
  return [].concat(_toConsumableArray(num.toString())).map(function (el) {
    return +el * (m /= 10);
  }).reverse();
}

var Say = (function () {
  function Say() {
    _classCallCheck(this, Say);
  }

  _createClass(Say, [{
    key: 'slices',
    value: function slices() {
      var digits = [].concat(_toConsumableArray(this.digits));
      var result = [digits.splice(0, digits.length % 3).join('')];
      while (digits.length > 0) {
        result.push(digits.splice(0, 3).join(''));
      }
      return result;
    }
  }, {
    key: 'parse',
    value: function parse() {
      var _this = this;

      var placeNameIndex = 0;
      var english = [];
      this.slices().reverse().forEach(function (digit) {
        var thousand = _this.parseThousand(digit).join(' ') + ' ';
        if (thousand.trim().length > 0) {
          english.push((thousand += PLACENAMES[placeNameIndex]).trim());
        }
        placeNameIndex++;
      });
      return english.reverse().join(' ');
    }
  }, {
    key: 'parseThousand',
    value: function parseThousand(num) {
      var powers = splitByPowers(num);
      var segments = [];
      if (powers[1] === 10) {
        var index = 10 + powers[0];
        segments.push(ONES[index]);
      } else {
        segments.push(ONES[powers[0]]);
        segments.push(TENS[powers[1] / 10]);
      }
      if (segments[1] && segments[0]) {
        var hyphenated = segments.splice(0, 2).reverse().join('-');
        segments.unshift(hyphenated);
      }
      powers[2] ? segments.push(ONES[powers[2] / 100] + ' hundred') : {};
      return segments.reverse();
    }
  }, {
    key: 'inEnglish',
    value: function inEnglish(num) {
      if (!num) return 'zero';
      if (num < 0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
      this.digits = num.toString();
      this.english = this.parse();
      return this.english;
    }
  }]);

  return Say;
})();

exports['default'] = Say;
module.exports = exports['default'];