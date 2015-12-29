"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinarySearchTree = (function () {
  function BinarySearchTree(data) {
    _classCallCheck(this, BinarySearchTree);

    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      if (value <= this.data) {
        this.insertLeft(value);
      } else {
        this.insertRight(value);
      }
    }
  }, {
    key: "insertLeft",
    value: function insertLeft(value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }, {
    key: "insertRight",
    value: function insertRight(value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }, {
    key: "each",
    value: function each(fn) {
      if (this.left) {
        this.left.each(fn);
      }
      fn.call(this, this.data);
      if (this.right) {
        this.right.each(fn);
      }
    }
  }]);

  return BinarySearchTree;
})();

exports["default"] = BinarySearchTree;
module.exports = exports["default"];