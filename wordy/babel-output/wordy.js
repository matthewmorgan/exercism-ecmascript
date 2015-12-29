"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArgumentError = function ArgumentError() {
  return {
    name: "argument error",
    message: "oops"
  };
};

var OPS = new RegExp(/(plus|minus|divided by|multiplied by)+/g);

var Wordy = (function () {
  function Wordy(question) {
    _classCallCheck(this, Wordy);

    this.numbers = question.match(/[-]{0,1}\d+/g);
    this.operands = question.match(OPS);
  }

  _createClass(Wordy, [{
    key: "answer",
    value: function answer() {
      if (!this.numbers || !this.operands) {
        throw new ArgumentError();
      }
      var ii = 1,
          jj = 0,
          result = +this.numbers[0];

      while (ii < this.numbers.length + 1) {
        var op = this.operands[jj++],
            b = +this.numbers[ii++] || null;
        switch (op) {
          case 'plus':
            result += b;
            break;
          case 'minus':
            result -= b;
            break;
          case 'multiplied by':
            result *= b;
            break;
          case 'divided by':
            result /= b;
            break;
        }
      }
      return result;
    }
  }]);

  return Wordy;
})();

exports.WordProblem = Wordy;
exports.ArgumentError = ArgumentError;