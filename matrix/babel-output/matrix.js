'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (input) {
  var _this = this;

  this.columns = [];
  this.rows = input.split('\n').map(function (row) {
    return row.split(' ').reduce(function (prev, curr) {
      prev.push(+curr);
      return prev;
    }, []);
  });

  var _loop = function (ci) {
    _this.columns[ci] = [];
    _this.rows.forEach(function (row) {
      _this.columns[ci].push(row[ci]);
    });
  };

  for (var ci = 0; ci < this.rows.length; ci++) {
    _loop(ci);
  }
};

module.exports = exports['default'];