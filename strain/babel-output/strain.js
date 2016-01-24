"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMatches = function getMatches(doesMatch, db, filter) {
  var matches = [];
  for (var ii = 0; ii < db.length; ii++) {
    filter(db[ii]) === doesMatch && matches.push(db[ii]);
  }
  return matches;
};

exports["default"] = (function () {
  return {
    keep: function keep(db, filter) {
      return getMatches(true, db, filter);
    },
    discard: function discard(db, filter) {
      return getMatches(false, db, filter);
    }
  };
})();

module.exports = exports["default"];