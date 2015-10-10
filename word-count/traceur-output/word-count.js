"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function() {
  var $__0;
  return {count: $traceurRuntime.initTailRecursiveFunction(function(phrase) {
      return $traceurRuntime.call(function(phrase) {
        return ($__0 = phrase.trim().split(/\s+/), $traceurRuntime.continuation($__0.reduce, $__0, [function(counts, word) {
          counts[$traceurRuntime.toProperty(word)] = counts.hasOwnProperty(word) ? counts[$traceurRuntime.toProperty(word)] + 1 : 1;
          return counts;
        }, {}]));
      }, this, arguments);
    })};
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
