"use strict";
var $__0;
$traceurRuntime.options.symbols = true;
var $__default = $traceurRuntime.initTailRecursiveFunction(function(old) {
  return $traceurRuntime.call(function(old) {
    return ($__0 = Object.keys(old), $traceurRuntime.continuation($__0.reduce, $__0, [function(noo, score) {
      old[$traceurRuntime.toProperty(+score)].forEach(function(letter) {
        return noo[$traceurRuntime.toProperty(letter.toLowerCase())] = +score;
      });
      return noo;
    }, {}]));
  }, this, arguments);
});
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
