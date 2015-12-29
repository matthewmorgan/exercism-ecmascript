"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Element(value) {
  return { value: value, next: null, prev: null };
}

var Deque = (function () {
  function Deque() {
    _classCallCheck(this, Deque);

    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  _createClass(Deque, [{
    key: "pop",
    value: function pop() {
      if (!this.head) {
        return undefined;
      }
      var result = this.head.value;
      this.head = this.head.prev;
      return result;
    }
  }, {
    key: "push",
    value: function push(value) {
      if (this.head) {
        var newHead = new Element(value);
        newHead.prev = this.head;
        this.head.next = newHead;
        this.head = newHead;
      } else {
        this.head = new Element(value);
        this.tail = this.head;
      }
    }
  }, {
    key: "shift",
    value: function shift() {
      this.tail.next ? this.tail.next.prev = null : {};
      var value = this.tail.value;
      this.tail = this.tail.next;
      return value;
    }
  }, {
    key: "unshift",
    value: function unshift(value) {
      if (this.tail) {
        var newTail = new Element(value);
        newTail.next = this.tail;
        this.tail.prev = newTail;
        this.tail = newTail;
      } else {
        this.tail = new Element(value);
        this.head = this.tail;
      }
    }
  }, {
    key: "count",
    value: function count() {
      var count = 0,
          element = this.head;

      while (this.head && element) {
        count++;
        element = element.prev;
      }
      return count;
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      var element = this.head;
      while (element) {
        if (element.value === value) {
          if (this.head === element) {
            this.head = null;
          }
          element.next ? element.next.prev = element.prev : {};
          element.prev ? element.prev.next = element.next : {};
          element = null;
        } else {
          element = element.prev;
        }
      }
    }
  }]);

  return Deque;
})();

exports["default"] = Deque;
module.exports = exports["default"];