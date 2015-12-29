"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MINUTESPERDAY = 1440;

exports["default"] = function (hour, minute) {
  var _this = this;

  var clock = undefined;
  clock = (hour || 0) * 60 + (minute || 0);

  var adjustTime = function adjustTime(delta) {
    delta = delta >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;
    var newMinutes = (clock + delta) % MINUTESPERDAY;
    clock = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;
    return _this;
  };

  var formatChunk = function formatChunk(num) {
    var numString = new String(num);
    return numString.length === 1 ? "0" + numString : numString;
  };

  var formatTime = function formatTime(clock) {
    return formatChunk(Math.floor(clock / 60)) + ":" + formatChunk(clock % 60);
  };

  return {
    plus: function plus(minutes) {
      adjustTime(minutes);
      return this;
    },
    minus: function minus(minutes) {
      adjustTime(-minutes);
      return this;
    },
    toString: function toString() {
      return formatTime(clock);
    },
    equals: function equals(other) {
      return clock === other.clock;
    },
    clock: clock
  };
};

;
module.exports = exports["default"];