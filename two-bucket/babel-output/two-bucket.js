'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TwoBucket = (function () {
  function TwoBucket(cap1, cap2, goal, goalBucket) {
    _classCallCheck(this, TwoBucket);

    var self = this;
    self.goalBucket = goalBucket;
    self.goal = goal;
    self.count = 1;
    self.one = { contains: cap1, capacity: cap1 };
    self.two = { contains: 0, capacity: cap2 };
    if (goalBucket === 'two') {
      self.one = { contains: cap2, capacity: cap2 };
      self.two = { contains: 0, capacity: cap1 };
    }
  }

  _createClass(TwoBucket, null, [{
    key: 'transfer',
    value: function transfer() {
      var transferAmount = Math.min(this.one.contains, this.two.capacity - this.two.contains);
      this.one.contains -= transferAmount;
      this.two.contains += transferAmount;
      return this.one.contains === this.goal;
    }
  }, {
    key: 'moves',
    value: function moves() {
      while (!this.transfer()) {
        if (this.two.contains === this.two.capacity) {
          this.two.contains = 0;
        } else {
          this.one.contains = this.one.capacity;
        }
        this.count += 2;
      }
      this.otherBucket = this.two.contains;
      return ++this.count;
    }
  }]);

  return TwoBucket;
})();

exports['default'] = TwoBucket;
module.exports = exports['default'];