"use strict";
$traceurRuntime.options.symbols = true;
var $__default = function(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
