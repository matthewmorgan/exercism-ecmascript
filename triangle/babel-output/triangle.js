'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var sides = undefined;
var TRIANGLE_KINDS = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' };

var throwOnIllegalSides = function throwOnIllegalSides() {
  if (sides.some(function (side) {
    return side <= 0;
  })) throw new Error('Side lengths must be positive!');
};

var throwOnViolatesInequality = function throwOnViolatesInequality() {
  if (sides[2] > sides[0] + sides[1]) throw new Error('Sum of two sides must exceed third side!');
};

var Triangle = (function () {
  function Triangle() {
    _classCallCheck(this, Triangle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    sides = args.sort();
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      throwOnIllegalSides();
      throwOnViolatesInequality();
      var uniqueSideCount = new Set(sides).size;
      return TRIANGLE_KINDS[uniqueSideCount];
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];