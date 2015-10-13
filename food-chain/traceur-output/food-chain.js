"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var $__default = function() {
  return {
    verse: $traceurRuntime.initTailRecursiveFunction(function(num) {
      return $traceurRuntime.call(function(num) {
        return $traceurRuntime.continuation(buildVerse, null, [num]);
      }, this, arguments);
    }),
    verses: $traceurRuntime.initTailRecursiveFunction(function(start, stop) {
      return $traceurRuntime.call(function(start, stop) {
        return $traceurRuntime.continuation(buildVerses, null, [start, stop]);
      }, this, arguments);
    })
  };
};
var verses = {
  fly: {conclusion: "I don't know why she swallowed the fly. Perhaps she'll die."},
  spider: {
    comment: "It wriggled and jiggled and tickled inside her.",
    action: " that wriggled and jiggled and tickled inside her"
  },
  bird: {comment: "How absurd to swallow a bird!"},
  cat: {comment: "Imagine that, to swallow a cat!"},
  dog: {comment: "What a hog, to swallow a dog!"},
  goat: {comment: "Just opened her throat and swallowed a goat!"},
  cow: {comment: "I don't know how she swallowed a cow!"},
  horse: {conclusion: "She's dead, of course!"}
};
var animalNames = Object.keys(verses);
buildVerse = $traceurRuntime.initTailRecursiveFunction(function(num, song) {
  return $traceurRuntime.call(function(num, song) {
    var showComment = arguments[2] !== (void 0) ? arguments[2] : true;
    var name = animalNames[$traceurRuntime.toProperty(--num)];
    var animal = verses[$traceurRuntime.toProperty(name)];
    song = song || ("I know an old lady who swallowed a " + name + ".\n");
    if (animal.conclusion) {
      song += animal.conclusion + '\n';
      return song;
    }
    song += showComment ? animal.comment + "\n" : '';
    var nextName = animalNames[$traceurRuntime.toProperty(num - 1)];
    var nextAnimal = verses[$traceurRuntime.toProperty(nextName)];
    song += ("She swallowed the " + name + " to catch the " + nextName);
    song += nextAnimal.action || '';
    song += '.\n';
    return $traceurRuntime.continuation(buildVerse, null, [num, song, false]);
  }, this, arguments);
});
buildVerses = function(start, stop) {
  var song = '';
  while (start <= stop) {
    song += buildVerse(start++) + '\n';
  }
  return song;
};
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
