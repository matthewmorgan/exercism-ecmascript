"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = (function () {
  function Search(data) {
    _classCallCheck(this, Search);

    isSorted(data) ? this.array = data : {};
  }

  _createClass(Search, [{
    key: "indexOf",
    value: function indexOf(target) {
      var lower = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var upper = arguments.length <= 2 || arguments[2] === undefined ? this.array.length - 1 : arguments[2];

      var cursor = lower + Math.ceil((upper - lower) / 2);
      var el = this.array[cursor];
      if (el === target) return cursor;else if (upper === lower && el !== target) return -1;

      el > target ? upper = cursor : lower = cursor;
      return this.indexOf(target, lower, upper);
    }
  }]);

  return Search;
})();

exports["default"] = Search;

var isSorted = function isSorted(arr) {
  return arr.every(function (el, ii) {
    return ii === 0 || el >= arr[ii - 1];
  });
};
module.exports = exports["default"];