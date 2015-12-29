'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PigLatin = (function () {
  function PigLatin() {
    _classCallCheck(this, PigLatin);
  }

  _createClass(PigLatin, [{
    key: 'translate',
    value: function translate(english) {
      var englishWords = english.split(' ');
      var pigWords = [];
      englishWords.forEach(function (word) {
        return word.match(/^[aeiou]/) ? pigWords.push(translateVowelStart(word)) : pigWords.push(translateConsonantStart(word));
      });
      return pigWords.join(' ');
    }
  }]);

  return PigLatin;
})();

var translateVowelStart = function translateVowelStart(word) {
  return word + 'ay';
};

var translateConsonantStart = function translateConsonantStart(word) {
  var result = undefined;
  var quCase = word.match(new RegExp(/^\w{0,1}qu/));
  quCase ? result = getPigWord(word, quCase[0]) : {};
  var chCase = word.match(new RegExp(/^\w{0,1}ch/));
  chCase ? result = getPigWord(word, chCase[0]) : {};
  var thCase = word.match(new RegExp(/^th[r]{0,1}/));
  thCase ? result = getPigWord(word, thCase[0]) : {};
  if (!result) {
    result = word.substr(1, word.length) + word.charAt(0) + 'ay';
  }
  return result;
};

var getPigWord = function getPigWord(word, suffix) {
  return word.substr(suffix.length, word.length - suffix.length) + suffix + 'ay';
};

exports['default'] = PigLatin;
module.exports = exports['default'];