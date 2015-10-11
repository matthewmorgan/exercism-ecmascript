"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
var Beer = function() {
  return {
    verse: singAVerse,
    sing: sing
  };
};
var oneLeft = '1 bottle of beer on the wall, 1 bottle of beer.\n';
var passTheLast = 'Take it down and pass it around, no more bottles of beer on the wall.\n';
var getMore = "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
var singAVerse = function(verseNum) {
  var howMany = ((verseNum || 'No more') + " bottles of beer on the wall, " + (verseNum || 'no more') + " bottles of beer.\n");
  var passOne = ("Take one down and pass it around, " + (verseNum - 1) + " " + (verseNum > 2 ? 'bottles' : 'bottle') + " of beer on the wall.\n");
  return ("" + (verseNum === 0 ? howMany + getMore : verseNum === 1 ? oneLeft + passTheLast : howMany + passOne));
};
var sing = function(start) {
  var stop = arguments[1] !== (void 0) ? arguments[1] : 0;
  var result = '';
  while (start >= stop)
    result += singAVerse(start--) + '\n';
  return result.trim() + '\n';
};
var $__default = Beer();
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
