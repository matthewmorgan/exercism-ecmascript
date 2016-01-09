//const notAlpha = /[^a-z]+/gi,
//      alphaLength = 26;
//
//
//export default class Pangram {
//
//  constructor (candidate){
//    const cleaned = (candidate.replace(notAlpha,'')).toLowerCase();
//    this.unique = new Set([...cleaned]);
//  }
//
//  isPangram (){
//    return this.unique.size === alphaLength;
//  }
//}

'use strict';

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var Pangram = function Pangram(sentence) {
  var sentence = sentence;
  var containedLetters = Object.create(null);
  this.isPangramValue = true;

  // generate a list of contained letters
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sentence.toLocaleLowerCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var l = _step.value;

      containedLetters[l] = null;
    }

    // check if all letters of alphabet present in sentence
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = alphabet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var l = _step2.value;

      if (!(l in containedLetters)) {
        this.isPangramValue = false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

Pangram.prototype.isPangram = function () {
  return this.isPangramValue;
};

module.exports = Pangram;