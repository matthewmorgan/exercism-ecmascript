"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Luhn = (function () {
  function Luhn(accountNumber) {
    _classCallCheck(this, Luhn);

    this.number = accountNumber;
    this.digits = [].concat(_toConsumableArray(String(accountNumber))).reverse();
    this.checkDigit = getCheckDigit(this.digits);
    this.checksum = getChecksum(this.digits);
    this.addends = getAddends(this.digits);
    this.valid = isValid(this.digits);
  }

  _createClass(Luhn, null, [{
    key: "create",
    value: function create(accountNumber) {
      var digit = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var luhn = new Luhn(accountNumber + String(digit));
      return luhn.valid ? +luhn.number : Luhn.create(accountNumber, digit + 1);
    }
  }]);

  return Luhn;
})();

exports["default"] = Luhn;

var getAddends = function getAddends(digits) {
  return digits.reduce(function (prev, curr, ii) {
    ii % 2 !== 0 ? prev.push(+curr * 2 > 9 ? +curr * 2 - 9 : +curr * 2) : prev.push(+curr);
    return prev;
  }, []).reverse();
};

var getCheckDigit = function getCheckDigit(digits) {
  return parseInt(digits[0]);
};

var isValid = function isValid(digits) {
  return getChecksum(digits) % 10 === 0;
};

var getChecksum = function getChecksum(digits) {
  return getAddends(digits).reduce(function (prev, curr) {
    return prev += curr;
  }, 0);
};
module.exports = exports["default"];