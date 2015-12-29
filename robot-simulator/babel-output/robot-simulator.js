'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DIRECTIONS = ['north', 'east', 'south', 'west'];
var INSTRUCTIONS = { L: 'turnLeft', R: 'turnRight', A: 'advance' };

var RobotSimulator = (function () {
  function RobotSimulator() {
    _classCallCheck(this, RobotSimulator);
  }

  _createClass(RobotSimulator, [{
    key: 'orient',
    value: function orient(dir) {
      if (DIRECTIONS.indexOf(dir) < 0) throw "Invalid Robot Bearing";
      this.bearing = dir;
    }
  }, {
    key: 'turnRight',
    value: function turnRight() {
      this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) + 1) % 4];
    }
  }, {
    key: 'turnLeft',
    value: function turnLeft() {
      this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) + 3) % 4];
    }
  }, {
    key: 'at',
    value: function at(x, y) {
      this.coordinates = [x, y];
    }
  }, {
    key: 'advance',
    value: function advance() {
      var _this = this;

      var setCoords = {
        'north': function north() {
          return _this.coordinates[1]++;
        },
        'south': function south() {
          return _this.coordinates[1]--;
        },
        'east': function east() {
          return _this.coordinates[0]++;
        },
        'west': function west() {
          return _this.coordinates[0]--;
        }
      };
      setCoords[this.bearing].call(this);
    }
  }, {
    key: 'place',
    value: function place(_place) {
      this.orient(_place.direction);
      this.at(_place.x, _place.y);
    }
  }, {
    key: 'instructions',
    value: function instructions(commands) {
      return [].concat(_toConsumableArray(commands)).reduce(function (prev, curr) {
        prev.push(INSTRUCTIONS[curr]);
        return prev;
      }, []);
    }
  }, {
    key: 'evaluate',
    value: function evaluate(commands) {
      var _this2 = this;

      this.instructions(commands).forEach(function (command) {
        return _this2[command].call(_this2);
      });
    }
  }]);

  return RobotSimulator;
})();

exports['default'] = RobotSimulator;
module.exports = exports['default'];