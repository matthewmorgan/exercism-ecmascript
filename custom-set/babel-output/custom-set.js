'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CustomSet = (function () {
  function CustomSet() {
    var _this = this;

    var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, CustomSet);

    this.data = {};
    data.forEach(function (el) {
      return _this.put(el);
    });
    this.comparator = typeof data[0] === 'number' ? function (a, b) {
      return a - b;
    } : function (a, b) {
      return b <= a ? 1 : -1;
    };
  }

  _createClass(CustomSet, [{
    key: 'delete',
    value: function _delete(el) {
      delete this.data[el];
      return this;
    }
  }, {
    key: 'eql',
    value: function eql(other) {
      return this.difference(other).size() === 0;
    }
  }, {
    key: 'difference',
    value: function difference(other) {
      return new CustomSet(Object.keys(this.data).filter(function (el) {
        return other.data[el] === undefined;
      }));
    }
  }, {
    key: 'disjoint',
    value: function disjoint(other) {
      return this.size === 0 || this.difference(other).size() === this.size();
    }
  }, {
    key: 'intersection',
    value: function intersection(other) {
      return this.difference(this.difference(other));
    }
  }, {
    key: 'union',
    value: function union(other) {
      return new CustomSet(this.toList().concat(this.difference(other).toList()));
    }
  }, {
    key: 'subset',
    value: function subset(other) {
      return other.eql(this.intersection(other));
    }
  }, {
    key: 'toList',
    value: function toList() {
      return Object.keys(this.data).map(function (el) {
        return +el;
      });
    }
  }, {
    key: 'member',
    value: function member(el) {
      return this.data[el] !== undefined;
    }
  }, {
    key: 'put',
    value: function put(value) {
      this.data[value] = value;
      return this;
    }
  }, {
    key: 'sort',
    value: function sort() {
      this.data.sort(this.comparator);
    }
  }, {
    key: 'size',
    value: function size() {
      return Object.keys(this.data).length;
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.data = {};
      return this;
    }
  }]);

  return CustomSet;
})();

exports['default'] = CustomSet;
module.exports = exports['default'];