'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bigInteger = require('./big-integer');

var _bigInteger2 = _interopRequireDefault(_bigInteger);

exports['default'] = function () {
  return {
    square: function square(n) {
      return (0, _bigInteger2['default'])(2).pow(n - 1).toString();
    },
    total: function total() {
      return (0, _bigInteger2['default'])(2).pow(64).minus(1).toString();
    }
  };
};

module.exports = exports['default'];