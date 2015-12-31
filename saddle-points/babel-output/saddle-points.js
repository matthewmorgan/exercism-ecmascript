"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findSaddlePoints(rows, rowMaxs, colMins) {
  return rows.reduce(function (saddlePoints, row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      if (cell === rowMaxs[rowIndex] && cell === colMins[colIndex]) {
        saddlePoints.push([rowIndex, colIndex]);
      }
    });
    return saddlePoints;
  }, []);
}

var Matrix = function Matrix(data) {
  var _this = this;

  _classCallCheck(this, Matrix);

  this.rows = [];
  this.columns = [];
  data.split(/\n/).map(function (row) {
    _this.rows.push(row.trim().split(/\s/).map(function (cell, jj) {
      _this.columns[jj] ? _this.columns[jj].push(+cell) : _this.columns[jj] = [+cell];
      return +cell;
    }));
  });

  var rowMaxs = this.rows.map(function (row) {
    return Math.max.apply(null, row);
  });
  var colMins = this.columns.map(function (col) {
    return Math.min.apply(null, col);
  });
  this.saddlePoints = findSaddlePoints(this.rows, rowMaxs, colMins);
};

exports["default"] = Matrix;
module.exports = exports["default"];