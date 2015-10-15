"use strict";
$traceurRuntime.options.symbols = true;
var robotName = '',
    usedNames = {};
var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var random = $traceurRuntime.initTailRecursiveFunction(function(max) {
  return $traceurRuntime.call(function(max) {
    return $traceurRuntime.continuation(Math.floor, Math, [Math.random() * max]);
  }, this, arguments);
});
var generateName = function() {
  var name = alpha.charAt(random(26)) + alpha.charAt(random(26)) + random(10) + random(10) + random(10);
  usedNames[$traceurRuntime.toProperty(name)] ? name = generateName() : usedNames[$traceurRuntime.toProperty(name)] = true;
  return name;
};
var $__default = Robot = function() {
  robotName = generateName();
  return {
    name: robotName,
    reset: function() {
      this.name = generateName();
    }
  };
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
