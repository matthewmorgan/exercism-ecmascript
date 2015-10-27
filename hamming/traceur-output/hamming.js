"use strict";
$traceurRuntime.options.symbols = true;
var $__default = function() {
  return ({compute: function() {
      var strand1 = arguments[0] !== (void 0) ? arguments[0] : '';
      var strand2 = arguments[1] !== (void 0) ? arguments[1] : '';
      if (strand1.length !== strand2.length)
        throw new Error("DNA strands must be of equal length.");
      return $traceurRuntime.spread(strand1).filter(function(nuc, pos) {
        return nuc !== strand2.charAt(pos);
      }).length;
    }});
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
