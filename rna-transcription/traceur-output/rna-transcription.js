"use strict";
$traceurRuntime.options.symbols = true;
var $__default = function() {
  var $__0;
  return ({toRna: $traceurRuntime.initTailRecursiveFunction(function(dna) {
      return $traceurRuntime.call(function(dna) {
        return ($__0 = $traceurRuntime.spread(dna).map(function(nuc) {
          return ({
            C: 'G',
            G: 'C',
            A: 'U',
            T: 'A'
          })[$traceurRuntime.toProperty(nuc)];
        }), $traceurRuntime.continuation($__0.join, $__0, ['']));
      }, this, arguments);
    })});
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
