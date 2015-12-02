"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (hour, minute) {
  var MINUTESPERDAY = 1440;
  var self = this;
  var clock = (hour || 0) * 60 + (minute || 0);

  function formatChunk(num) {
    var numString = new String(num);
    return numString.length === 1 ? "0" + numString : numString;
  };

  function formatTime(clock) {
    return formatChunk(Math.floor(clock / 60)) + ":" + formatChunk(clock % 60);
  }

  function adjustTime(delta) {
    delta = delta >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;
    var newMinutes = (clock + delta) % MINUTESPERDAY;
    clock = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;
  }

  return {
    clock: clock,
    toString: function toString() {
      return formatTime(clock);
    },
    plus: function plus(minutes) {
      adjustTime(minutes);
      return self;
    },
    minus: function minus(minutes) {
      adjustTime(-minutes);
      return this;
    },
    equals: function equals(other) {
      return clock === other.clock;
    }
  };
};

;
module.exports = exports["default"];