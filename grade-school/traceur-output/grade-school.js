"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function() {
  var roster = {};
  var add = function(student, grade) {
    roster[$traceurRuntime.toProperty(grade)] ? roster[$traceurRuntime.toProperty(grade)].push(student) : roster[$traceurRuntime.toProperty(grade)] = [student];
    roster[$traceurRuntime.toProperty(grade)].sort();
  };
  var getReadOnly = $traceurRuntime.initTailRecursiveFunction(function(db) {
    return $traceurRuntime.call(function(db) {
      return $traceurRuntime.continuation(JSON.parse, JSON, [JSON.stringify(db)]);
    }, this, arguments);
  });
  return {
    roster: $traceurRuntime.initTailRecursiveFunction(function() {
      return $traceurRuntime.call(function() {
        return $traceurRuntime.continuation(getReadOnly, null, [roster]);
      }, this, arguments);
    }),
    add: $traceurRuntime.initTailRecursiveFunction(function(student, grade) {
      return $traceurRuntime.call(function(student, grade) {
        return $traceurRuntime.continuation(add, null, [student, grade]);
      }, this, arguments);
    }),
    grade: $traceurRuntime.initTailRecursiveFunction(function(grade) {
      return $traceurRuntime.call(function(grade) {
        return $traceurRuntime.continuation(getReadOnly, null, [roster[$traceurRuntime.toProperty(grade)] || []]);
      }, this, arguments);
    })
  };
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
