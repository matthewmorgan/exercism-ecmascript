'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var BREAK_WORDS = /[A-Z]+[a-z]*|[a-z]+/g;
exports['default'] = {
  parse: function parse(phrase) {
    return phrase.match(BREAK_WORDS).reduce(function (acronym, word) {
      return acronym += word[0].toUpperCase();
    }, '');
  }
};
module.exports = exports['default'];