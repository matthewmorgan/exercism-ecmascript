"use strict";
$traceurRuntime.options.symbols = true;
var Leap = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function Leap(year) {
      return (year % 100 || !(year % 400)) && !(year % 4);
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Leap, {}, {}]);
  }, this, arguments);
})();
var $__default = Leap;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
