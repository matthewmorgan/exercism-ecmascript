'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
var mod = function mod(n, m) {
  return (n % m + m) % m;
};

function generateKey() {
  return Array.apply(null, Array(100)).map(function () {
    return ALPHA.charAt(Math.floor(Math.random() * ALPHA.length));
  }).join('');
}

function xCode(key, inText, sign) {
  return [].concat(_toConsumableArray(inText)).reduce(function (outText, letter, ii) {
    var offset = sign * ALPHA.indexOf(key.charAt(mod(ii, key.length)));
    return outText += ALPHA.charAt(mod(ALPHA.indexOf(letter) + offset, ALPHA.length));
  }, '');
}

exports['default'] = function (key) {
  if (typeof key === 'undefined') {
    key = generateKey();
  } else if (key.length === 0 || key.match(/[^a-z]/, "g")) {
    throw new Error("Bad key");
  }

  return {
    key: key,
    encode: function encode(plainText) {
      return xCode(key, plainText, 1);
    },
    decode: function decode(encodedText) {
      return xCode(key, encodedText, -1);
    }
  };
};

module.exports = exports['default'];