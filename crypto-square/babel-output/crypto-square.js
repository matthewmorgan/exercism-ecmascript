'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var squareSize = undefined;

var getSegments = function getSegments(str) {
  var result = [];
  var source = [].concat(_toConsumableArray(str));
  while (source.length > 0) {
    result.push(source.splice(0, squareSize).join(''));
  }
  return result;
};

var getCipherText = function getCipherText(square) {
  var cipherText = '';
  for (var ii = 0; ii < squareSize; ii++) {
    for (var jj = 0; jj < square.length; jj++) {
      cipherText += square[jj][ii] || "";
    }
  }
  return cipherText;
};

var _normalizePlaintext = function _normalizePlaintext(str) {
  return str.toLowerCase().replace(/[^\w]/g, '');
};
var getSquareSize = function getSquareSize(str) {
  return Math.ceil(Math.sqrt(str.length));
};

var Crypto = function Crypto(phrase) {
  var _this = this;

  _classCallCheck(this, Crypto);

  squareSize = 0;
  return {
    normalizePlaintext: function normalizePlaintext() {
      return _normalizePlaintext(phrase);
    },
    size: function size() {
      return getSquareSize(_normalizePlaintext(phrase));
    },
    plaintextSegments: function plaintextSegments() {
      var normalized = _normalizePlaintext(phrase);
      squareSize = this.size(normalized);
      return getSegments(normalized);
    },
    ciphertext: function ciphertext() {
      return getCipherText(this.plaintextSegments());
    },
    normalizeCiphertext: function normalizeCiphertext() {
      return getSegments(_this.ciphertext).join(' ');
    }
  };
};

exports['default'] = Crypto;
module.exports = exports['default'];