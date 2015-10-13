"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _roster = {},
      _add = function _add(student, grade) {
    _roster[grade] ? _roster[grade].push(student) : _roster[grade] = [student];
    _roster[grade].sort();
  },
      getReadOnly = function getReadOnly(db) {
    return JSON.parse(JSON.stringify(db));
  };

  return {
    roster: function roster() {
      return getReadOnly(_roster);
    },
    add: function add(student, grade) {
      return _add(student, grade);
    },
    grade: function grade(_grade) {
      return getReadOnly(_roster[_grade] || []);
    }
  };
};

module.exports = exports["default"];
