"use strict";
'use strict';
var $__1;
$traceurRuntime.options.symbols = true;
var isSilent = function(input) {
  return input.trim().length < 1;
};
var isShouting = $traceurRuntime.initTailRecursiveFunction(function(input) {
  return $traceurRuntime.call(function(input) {
    return (input.toUpperCase() === input) && ($__1 = (/[A-Z]+/), $traceurRuntime.continuation($__1.test, $__1, [input]));
  }, this, arguments);
});
var isQuestion = function(input) {
  return input.charAt(input.length - 1) === '?';
};
var responses = {
  4: 'Fine. Be that way!',
  2: 'Whoa, chill out!',
  1: 'Sure.',
  0: 'Whatever.'
};
var Bob = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function Bob() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Bob, {hey: function(input) {
        return responses[$traceurRuntime.toProperty(Math.max(isSilent(input) << 2, isShouting(input) << 1, isQuestion(input) << 0))];
      }}, {}]);
  }, this, arguments);
})();
var $__default = Bob;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
