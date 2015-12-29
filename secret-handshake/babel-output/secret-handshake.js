'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];

exports['default'] = function (shake) {
  if (typeof shake !== 'number') throw new Error("Handshake must be a number");
  return {
    commands: function commands() {
      var actions = ACTIONS.reduce(function (sequence, move, ii) {
        shake & Math.pow(2, ii) ? sequence.push(move) : {};
        return sequence;
      }, []);
      return shake & 16 ? actions.reverse() : actions;
    }
  };
};

module.exports = exports['default'];