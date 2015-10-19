"use strict";
$traceurRuntime.options.symbols = true;
var Gigasecond = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function Gigasecond(start) {
      this.start = start;
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Gigasecond, {date: $traceurRuntime.initTailRecursiveFunction(function() {
        return $traceurRuntime.call(function() {
          return $traceurRuntime.continuation($traceurRuntime.construct, Date, [Date.parse(this.start) + Math.pow(10, 12)]);
        }, this, arguments);
      })}, {}]);
  }, this, arguments);
})();
var $__default = Gigasecond;
;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
