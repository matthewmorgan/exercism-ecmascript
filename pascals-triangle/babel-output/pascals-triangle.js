"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = [];
var factorial = function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return f[n] = factorial(n - 1) * n;
};

var cellValue = function cellValue(n, k) {
  return factorial(n) / factorial(k) / factorial(n - k);
};

var generateRows = function generateRows(rowCount) {
  var rows = [];
  for (var ii = 0; ii < rowCount; ii++) {
    var row = [];
    for (var jj = 0; jj < ii + 1; jj++) {
      row.push(cellValue(ii, jj));
    }
    rows.push(row);
  }
  var lastRow = rows[rows.length - 1];
  return [lastRow, rows];
};

var Triangle = function Triangle(rowCount) {
  _classCallCheck(this, Triangle);

  this.rowCount = rowCount;

  var _generateRows = generateRows(this.rowCount);

  var _generateRows2 = _slicedToArray(_generateRows, 2);

  var lastRow = _generateRows2[0];
  var rows = _generateRows2[1];

  this.lastRow = lastRow;
  this.rows = rows;
};

exports["default"] = Triangle;
module.exports = exports["default"];