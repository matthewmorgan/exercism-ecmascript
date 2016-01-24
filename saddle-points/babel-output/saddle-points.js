"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (data) {
  var _transposeMatrix = transposeMatrix(data);

  var rows = _transposeMatrix.rows;
  var columns = _transposeMatrix.columns;

  var _findMinMax = findMinMax(rows, columns);

  var rowMaxs = _findMinMax.rowMaxs;
  var colMins = _findMinMax.colMins;

  var saddlePoints = findSaddlePoints(rows, rowMaxs, colMins);
  return { rows: rows, columns: columns, saddlePoints: saddlePoints };
};

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

function transposeMatrix(data) {
  var rows = [];
  var columns = [];
  data.split(/\n/).map(function (row) {
    rows.push(row.trim().split(/\s/).map(function (cell, jj) {
      columns[jj] = (columns[jj] || []).concat(+cell);
      return +cell;
    }));
  });
  return { rows: rows, columns: columns };
}

function findMinMax(rows, columns) {
  var rowMaxs = rows.map(function (row) {
    return Math.max.apply(null, row);
  });
  var colMins = columns.map(function (col) {
    return Math.min.apply(null, col);
  });
  return { rowMaxs: rowMaxs, colMins: colMins };
}
module.exports = exports["default"];