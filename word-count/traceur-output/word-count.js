"use strict";
$traceurRuntime.options.symbols = true;
var Words = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    var $__2;
    function Words() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Words, {
      count: $traceurRuntime.initTailRecursiveFunction(function(input) {
        return $traceurRuntime.call(function(input) {
          return $traceurRuntime.continuation(this._mapToObj, this, [input.trim().split(/\s+/).reduce($traceurRuntime.initTailRecursiveFunction(function(wordMap, word) {
            return $traceurRuntime.call(function(wordMap, word) {
              return $traceurRuntime.continuation(wordMap.set, wordMap, [word, (wordMap.get(word) || 0) + 1]);
            }, this, arguments);
          }), new Map)]);
        }, this, arguments);
      }),
      _mapToObj: $traceurRuntime.initTailRecursiveFunction(function(m) {
        return $traceurRuntime.call(function(m) {
          return ($__2 = m.keys, $traceurRuntime.continuation($__2.reduce, $__2, [function(o, k) {
            o[$traceurRuntime.toProperty(k)] = m.get(k);
            return o;
          }, {}]));
        }, this, arguments);
      })
    }, {}]);
  }, this, arguments);
})();
var $__default = Words;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
