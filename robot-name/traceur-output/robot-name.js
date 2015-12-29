"use strict";
$traceurRuntime.options.symbols = true;
var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    usedNames = {};
var random = $traceurRuntime.initTailRecursiveFunction(function(max) {
  return $traceurRuntime.call(function(max) {
    return $traceurRuntime.continuation(Math.floor, Math, [Math.random() * max]);
  }, this, arguments);
});
var generateName = function() {
  var name = alpha.charAt(random(alpha.length)) + alpha.charAt(random(alpha.length)) + random(10) + random(10) + random(10);
  usedNames[$traceurRuntime.toProperty(name)] ? name = generateName() : usedNames[$traceurRuntime.toProperty(name)] = true;
  return name;
};
var Robot = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    var $__1;
    function Robot() {
      this.reset();
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [Robot, ($__1 = {}, Object.defineProperty($__1, "name", {
      get: function() {
        return this.robotName;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__1, "reset", {
      value: function() {
        this.robotName = generateName();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__1), {}]);
  }, this, arguments);
})();
var $__default = Robot;
;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
