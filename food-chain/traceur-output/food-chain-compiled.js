"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var verses = {
  fly: { conclusion: "I don't know why she swallowed the fly. Perhaps she'll die." },
  spider: { comment: "It wriggled and jiggled and tickled inside her." },
  bird: { comment: "How absurd, to swallow a bird!" },
  cat: { comment: "Imagine that, to swallow a cat!" },
  dog: { comment: "What a hog, to swallow a dog!" },
  goat: { comment: "Just opened her throat and swallowed a goat!" },
  cow: { comment: "I don't know how she swallowed a cow!" },
  horse: { conclusion: "She's dead, of course!" }
};
var animals = Object.keys(verses);
var $__default = function $__default() {
  return { verse: function verse(num) {
      return "I know an old lady who swallowed a " + animals[$traceurRuntime.toProperty(num + 1)] + ". " + (verses[$traceurRuntime.toProperty(animals[$traceurRuntime.toProperty(num + 1)])][$traceurRuntime.toProperty(conclusion)] || verses[$traceurRuntime.toProperty(animals[$traceurRuntime.toProperty(num + 1)])][$traceurRuntime.toProperty(comment)]);
    } };
};
Object.defineProperties(module.exports, {
  "default": { get: function get() {
      return $__default;
    } },
  __esModule: { value: true }
});

//# sourceMappingURL=food-chain-compiled.js.map