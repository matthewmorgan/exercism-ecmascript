"use strict";
$traceurRuntime.options.symbols = true;
var roster;
var School = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function School() {
      roster = {};
    }
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [School, {
      roster: $traceurRuntime.initTailRecursiveFunction(function() {
        return $traceurRuntime.call(function() {
          return $traceurRuntime.continuation(JSON.parse, JSON, [JSON.stringify(roster)]);
        }, this, arguments);
      }),
      add: function(name, grade) {
        roster[$traceurRuntime.toProperty(grade)] = this.grade(grade).concat(name).sort();
      },
      grade: $traceurRuntime.initTailRecursiveFunction(function(grade) {
        return $traceurRuntime.call(function(grade) {
          return $traceurRuntime.continuation(Array.from, Array, [roster[$traceurRuntime.toProperty(grade)] || []]);
        }, this, arguments);
      })
    }, {}]);
  }, this, arguments);
})();
var $__default = School;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
