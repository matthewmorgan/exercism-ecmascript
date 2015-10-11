"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function(input) {
  input = validate(input);
  return {
    number: function() {
      return input;
    },
    areaCode: $traceurRuntime.initTailRecursiveFunction(function() {
      return $traceurRuntime.call(function() {
        return $traceurRuntime.continuation(areaCode, null, [input]);
      }, this, arguments);
    }),
    toString: $traceurRuntime.initTailRecursiveFunction(function() {
      return $traceurRuntime.call(function() {
        return $traceurRuntime.continuation(toString, null, [input]);
      }, this, arguments);
    })
  };
};
var number = '0000000000';
var validate = $traceurRuntime.initTailRecursiveFunction(function(input) {
  return $traceurRuntime.call(function(input) {
    input = clean(input);
    switch (input.length) {
      case 11:
        return input.substring(0, 1) === '1' ? $traceurRuntime.continuation(input.substring, input, [1, 11]) : number;
      case 10:
        return input;
    }
    return number;
  }, this, arguments);
});
var clean = $traceurRuntime.initTailRecursiveFunction(function(input) {
  return $traceurRuntime.call(function(input) {
    return $traceurRuntime.continuation(input.replace, input, [/\D/g, '']);
  }, this, arguments);
});
var areaCode = $traceurRuntime.initTailRecursiveFunction(function(input) {
  return $traceurRuntime.call(function(input) {
    return $traceurRuntime.continuation(input.substring, input, [0, 3]);
  }, this, arguments);
});
var toString = function(input) {
  return ("(" + areaCode(input) + ") " + input.substring(3, 6) + "-" + input.substring(6, 10));
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
