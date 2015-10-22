"use strict";
$traceurRuntime.options.symbols = true;
var earthSecondsPerYear = 31557600;
var planetTimeScale = {
  Earth: 1,
  Mercury: .2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
};
var SpaceAge = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function SpaceAge(seconds) {
      var $__0 = this;
      this.seconds = seconds;
      Object.keys(planetTimeScale).forEach(function(planet) {
        $__0[$traceurRuntime.toProperty("on" + planet)] = function() {
          return +($__0.seconds / earthSecondsPerYear / planetTimeScale[$traceurRuntime.toProperty(planet)]).toFixed(2);
        };
      });
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [SpaceAge, {}, {}]);
  }, this, arguments);
})();
var $__default = SpaceAge;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
