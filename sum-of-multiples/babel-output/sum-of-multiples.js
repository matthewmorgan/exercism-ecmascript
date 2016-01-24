"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var marked0$0 = [range].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports["default"] = function () {
  var factors = arguments.length <= 0 || arguments[0] === undefined ? [3, 5] : arguments[0];

  return Object.freeze({ factors: factors, to: to });

  function to(limit) {
    var multiples = new Set();
    factors.forEach(function (factor) {
      console.log(factor);
      [].concat(_toConsumableArray(range(factor, limit, factor))).forEach(function (multiple) {
        console.log("::", multiple);
        multiples.add(multiple);
      }, 0);
    });
    var sum = [].concat(_toConsumableArray(multiples)).reduce(function (sum, m) {
      return sum += m;
    }, 0);
    console.log("#############");
    console.log(sum);
    console.log("#############");
    return sum;
  }
};

function range(curr, end, step) {
  return regeneratorRuntime.wrap(function range$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(curr >= end)) {
          context$1$0.next = 2;
          break;
        }

        return context$1$0.abrupt("return");

      case 2:
        context$1$0.next = 4;
        return curr;

      case 4:
        return context$1$0.delegateYield(range(curr += step, end, step), "t0", 5);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}
module.exports = exports["default"];