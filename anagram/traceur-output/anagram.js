"use strict";
var $__1;
$traceurRuntime.options.symbols = true;
var targetWord = '';
var sortedWord = '';
var sortChars = $traceurRuntime.initTailRecursiveFunction(function(str) {
  return $traceurRuntime.call(function(str) {
    return ($__1 = str.toLowerCase().split('').sort(), $traceurRuntime.continuation($__1.join, $__1, ['']));
  }, this, arguments);
});
var match = function(possible) {
  return targetWord !== possible.toLowerCase() && (sortedWord === sortChars(possible));
};
var matches = $traceurRuntime.initTailRecursiveFunction(function(possibles) {
  return $traceurRuntime.call(function(possibles) {
    return $traceurRuntime.continuation(possibles.filter, possibles, [match]);
  }, this, arguments);
});
var $__default = function(word) {
  targetWord = word;
  sortedWord = sortChars(targetWord);
  return {matches: $traceurRuntime.initTailRecursiveFunction(function(possibles) {
      return $traceurRuntime.call(function(possibles) {
        for (var more = [],
            $__0 = 1; $__0 < arguments.length; $__0++)
          more[$traceurRuntime.toProperty($__0 - 1)] = arguments[$traceurRuntime.toProperty($__0)];
        Array.isArray(possibles) ? more = more.concat(possibles) : more.push(possibles);
        return $traceurRuntime.continuation(matches, null, [more]);
      }, this, arguments);
    })};
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
