"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function() {
  return {compute: function() {
      var a = arguments[0] !== (void 0) ? arguments[0] : '';
      var b = arguments[1] !== (void 0) ? arguments[1] : '';
      if (a.length !== b.length)
        throw new Error("DNA strands must be of equal length.");
      return a.split('').filter(function(aNuc, ii) {
        return aNuc !== b.charAt(ii);
      }).length;
    }};
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
