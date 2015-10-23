"use strict";
$traceurRuntime.options.symbols = true;
var GIGASECOND_IN_MILLISECONDS = Math.pow(10, 9) * Math.pow(10, 3);
var Gigasecond = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function Gigasecond(date) {
      this.newDate = new Date(date.getTime() + GIGASECOND_IN_MILLISECONDS);
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Gigasecond, {date: function() {
        return this.newDate;
      }}, {}]);
  }, this, arguments);
})();
var $__default = Gigasecond;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
