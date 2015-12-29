'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var plainKey = 'abcdefghijklmnopqrstuvwxyz1234567890',
    codeKey = 'zyxwvutsrqponmlkjihgfedcba1234567890';
var getArrayOfAlphanumericChars = function getArrayOfAlphanumericChars(str) {
    return [].concat(_toConsumableArray(str.toLowerCase().replace(/\W/g, '')));
};
var chunk = function chunk(str) {
    return str.match(/.{1,5}/g).join(' ');
};

exports['default'] = {
    encode: function encode(plain) {
        return chunk(getArrayOfAlphanumericChars(plain).reduce(function (encodedString, curr) {
            return encodedString += codeKey[plainKey.indexOf(curr)];
        }, '').trim());
    }
};
module.exports = exports['default'];