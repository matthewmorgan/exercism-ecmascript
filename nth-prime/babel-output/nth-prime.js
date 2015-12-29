"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sieve = require('./sieve');

var _sieve2 = _interopRequireDefault(_sieve);

//my Sieve class from earlier

var Prime = (function () {
  function Prime() {
    _classCallCheck(this, Prime);
  }

  _createClass(Prime, [{
    key: "nth",

    // see http://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
    value: function nth(n) {
      if (n < 1) throw new Error("Prime is not possible");
      var approximateLimit = n * Math.log(n) + n * Math.log(Math.log(n));
      approximateLimit < 15 ? approximateLimit = 15 : {};
      return (0, _sieve2["default"])(approximateLimit).primes[n - 1];
    }
  }]);

  return Prime;
})();

exports["default"] = Prime;
module.exports = exports["default"];