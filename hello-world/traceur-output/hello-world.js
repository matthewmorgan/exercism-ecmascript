"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var HelloWorld = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function HelloWorld() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [HelloWorld, {hello: function(name) {
        return ("Hello, " + (name || "world") + "!");
      }}, {}]);
  }, this, arguments);
})();
var $__default = HelloWorld;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
