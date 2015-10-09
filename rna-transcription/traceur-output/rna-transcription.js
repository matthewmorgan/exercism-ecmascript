"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var map = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
};
var $__default = function() {
  var $__0;
  return {toRna: $traceurRuntime.initTailRecursiveFunction(function(rna) {
      return $traceurRuntime.call(function(rna) {
        return ($__0 = rna.split('').map(function(el) {
          return map[$traceurRuntime.toProperty(el)];
        }), $traceurRuntime.continuation($__0.join, $__0, ['']));
      }, this, arguments);
    })};
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
