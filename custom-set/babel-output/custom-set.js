//export default class CustomSet {
//  constructor(data = []) {
//    this.data = {};
//    data.forEach(el => this.put(el));
//    this.comparator = typeof data[0] === 'number' ?
//      (a, b) => a - b
//      : (a, b) => b <= a
//      ? 1 : -1;
//  }
//
//  delete(el) {
//    delete this.data[el];
//    return this;
//  }
//
//  eql(other) {
//    return this.difference(other).size() === 0;
//  }
//
//  difference(other) {
//    return new CustomSet(Object.keys(this.data).filter(el => other.data[el] === undefined));
//  }
//
//  disjoint(other) {
//    return this.size === 0 || this.difference(other).size() === this.size();
//  }
//
//  intersection(other) {
//    return this.difference(this.difference(other));
//  }
//
//  union(other) {
//    return new CustomSet(this.toList().concat(this.difference(other).toList()));
//  }
//
//  subset(other) {
//    return other.eql(this.intersection(other));
//  }
//
//  toList() {
//    return Object.keys(this.data).map(el =>  +el);
//  }
//
//  member(el) {
//    return this.data[el] !== undefined;
//  }
//
//  put(value) {
//    this.data[value] = value;
//    return this;
//  }
//
//  sort() {
//    this.data.sort(this.comparator);
//  }
//
//  size() {
//    return Object.keys(this.data).length;
//  }
//
//  empty() {
//    this.data = {};
//    return this;
//  }
//}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomSet = (function () {
  function CustomSet(ary) {
    _classCallCheck(this, CustomSet);

    this.set = ary ? ary.sort().filter(onlyUnique) : [];
  }

  _createClass(CustomSet, [{
    key: "delete",
    value: function _delete(v) {
      this.set.splice(this.set.indexOf(v), 1);
      return this;
    }
  }, {
    key: "eql",
    value: function eql(other) {
      return this.toString() === other.toString();
    }
  }, {
    key: "toString",
    value: function toString() {
      this.set.toString();
    }
  }, {
    key: "difference",
    value: function difference(other) {
      return new CustomSet(this.set.filter(function (el) {
        return other.set.indexOf(el) < 0;
      }));
    }
  }, {
    key: "intersection",
    value: function intersection(other) {
      return new CustomSet(this.set.filter(function (el) {
        return other.set.indexOf(el) >= 0;
      }));
    }
  }, {
    key: "disjoint",
    value: function disjoint(other) {
      return this.set.every(function (el) {
        return other.set.indexOf(el) < 0;
      });
    }
  }, {
    key: "empty",
    value: function empty() {
      this.set = [];
      return this;
    }
  }, {
    key: "member",
    value: function member(v) {
      return this.set.indexOf(v) >= 0;
    }
  }, {
    key: "put",
    value: function put(v) {
      this.set.concat(v).sort().filter(onlyUnique);
      return this;
    }
  }, {
    key: "size",
    value: function size() {
      return this.set.length;
    }
  }, {
    key: "subset",
    value: function subset(other) {
      var self = this;
      return other.set.every(function (el) {
        return self.member(el);
      });
    }
  }, {
    key: "toList",
    value: function toList() {
      return this.set;
    }
  }, {
    key: "union",
    value: function union(other) {
      return new CustomSet(this.set.concat(other.set));
    }
  }]);

  return CustomSet;
})();

exports["default"] = CustomSet;

var onlyUnique = function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
};
module.exports = exports["default"];