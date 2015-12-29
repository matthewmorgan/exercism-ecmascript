"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sum = function _sum(a, b, c) {
  return a + b + c;
};
var _product = function _product(a, b, c) {
  return a * b * c;
};
var _isPythagorean = function _isPythagorean(a, b, c) {
  return a * a + b * b === c * c;
};

var triplets = function triplets(params) {
  var max = params.maxFactor;
  var min = params.minFactor || 2;
  var targetSum = params.sum;
  var result = [];
  for (var ii = min; ii <= max; ii++) {
    for (var jj = ii + 1; jj <= max; jj++) {
      for (var kk = jj + 1; kk <= max; kk++) {
        _isPythagorean(ii, jj, kk) ? result.push(new Triplet(ii, jj, kk)) : {};
      }
    }
  }

  function isTargetSum(triplet) {
    return triplet.sum() === targetSum;
  }

  targetSum ? result = result.filter(isTargetSum) : {};
  return result;
};

var Triplet = (function () {
  function Triplet(a, b, c) {
    _classCallCheck(this, Triplet);

    return {
      sum: function sum() {
        return _sum(a, b, c);
      },
      product: function product() {
        return _product(a, b, c);
      },
      isPythagorean: function isPythagorean() {
        return _isPythagorean(a, b, c);
      }
    };
  }

  _createClass(Triplet, null, [{
    key: "where",
    value: function where(params) {
      return triplets(params);
    }
  }]);

  return Triplet;
})();

exports["default"] = Triplet;
module.exports = exports["default"];