"use strict";
$traceurRuntime.options.symbols = true;
var dnaToRnaMapping = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};
var Transcriptor = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    var $__1;
    function Transcriptor() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Transcriptor, {toRna: $traceurRuntime.initTailRecursiveFunction(function(dnaStrand) {
        return $traceurRuntime.call(function(dnaStrand) {
          return ($__1 = dnaStrand.split('').map(function(base) {
            return dnaToRnaMapping[$traceurRuntime.toProperty(base)];
          }), $traceurRuntime.continuation($__1.join, $__1, ['']));
        }, this, arguments);
      })}, {}]);
  }, this, arguments);
})();
var $__default = Transcriptor;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
