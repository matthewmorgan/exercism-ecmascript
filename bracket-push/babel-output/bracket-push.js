'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var BRACKETS = ['{', '[', '(', '}', ']', ')'];

exports['default'] = function (_ref) {
  var _ref2 = _toArray(_ref);

  var str = _ref2;

  var match = undefined;
  while (str.length > 0) {
    match = str.join('').match(/[\]\}\)]/);
    if (!match) return false;
    var pair = str.splice(match.index - 1, 2);
    if (BRACKETS.indexOf(pair[0]) !== BRACKETS.indexOf(pair[1]) - 3) return false;
  }
  return true;
};

;
module.exports = exports['default'];