"use strict";
var $__1;
$traceurRuntime.options.symbols = true;
var dance = new Set([function(input) {
  return input.trim().length < 1;
}, 'Fine. Be that way!'], [$traceurRuntime.initTailRecursiveFunction(function(input) {
  return $traceurRuntime.call(function(input) {
    return (input.toUpperCase() === input) && ($__1 = (/[A-Z]+/), $traceurRuntime.continuation($__1.test, $__1, [input]));
  }, this, arguments);
}), 'Whoa, chill out!'], [function(input) {
  return input.charAt(input.length - 1) === '?';
}], [function(input) {
  return true;
}, 'Whatever']);
var Bob = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    var $__3;
    function Bob() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Bob, {hey: $traceurRuntime.initTailRecursiveFunction(function(input) {
        return $traceurRuntime.call(function(input) {
          return ($__3 = dance.entries, $traceurRuntime.continuation($__3.filter, $__3, [$traceurRuntime.initTailRecursiveFunction(function(pair) {
            return $traceurRuntime.call(function(pair) {
              return $traceurRuntime.continuation(pair.key, pair, [input]);
            }, this, arguments);
          })]));
        }, this, arguments);
      })}, {}]);
  }, this, arguments);
})();
var $__default = Bob;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
