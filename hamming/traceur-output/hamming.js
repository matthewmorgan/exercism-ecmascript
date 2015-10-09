"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function() {
  var $__0;
  return {compute: $traceurRuntime.initTailRecursiveFunction(function(a, b) {
      return $traceurRuntime.call(function(a, b) {
        if (!a || !b || (a.length !== b.length)) {
          throw (new Error("DNA strands must be of equal length."));
        }
        return ($__0 = a.split(''), $traceurRuntime.continuation($__0.reduce, $__0, [function(prev, curr, ii) {
          return prev += (curr !== b.charAt(ii) ? 1 : 0);
        }, 0]));
      }, this, arguments);
    })};
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
