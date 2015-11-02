"use strict";
$traceurRuntime.options.symbols = true;
var isPalindrome = function(num) {
  return num.toString().split('').reverse().join('') === num.toString();
};
var Palindromes = function(params) {
  var maxFactor,
      minFactor,
      maxProduct,
      minProduct,
      data;
  maxFactor = params.maxFactor;
  minFactor = params.minFactor || 1;
  maxProduct = 1;
  minProduct = Infinity;
  data = [];
  for (var ii = minFactor; ii < maxFactor; ii++) {
    for (var jj = ii; jj <= maxFactor; jj++) {
      var product = ii * jj;
      if (isPalindrome(product)) {
        data[$traceurRuntime.toProperty(product)] = [ii, jj];
        maxProduct = Math.max(maxProduct, product);
        minProduct = Math.min(minProduct, product);
      }
    }
  }
  return {
    largest: {
      value: maxProduct,
      factors: data[$traceurRuntime.toProperty(maxProduct)]
    },
    smallest: {
      value: minProduct,
      factors: data[$traceurRuntime.toProperty(minProduct)]
    }
  };
};
var $__default = Palindromes;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
