"use strict";
$traceurRuntime.options.symbols = true;
var MSPERGIGASECOND = 1000000000000;
var $__default = function(start) {
  return ({date: $traceurRuntime.initTailRecursiveFunction(function() {
      return $traceurRuntime.call(function() {
        return $traceurRuntime.continuation($traceurRuntime.construct, Date, [start.getTime() + MSPERGIGASECOND]);
      }, this, arguments);
    })});
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
