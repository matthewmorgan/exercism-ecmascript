"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var W = 8,
    H = 8,
    STARTING = { black: [7, 3], white: [0, 3] };

var QueenAttack = function QueenAttack() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? STARTING : arguments[0];

  var self = undefined instanceof QueenAttack ? undefined : Object.getPrototypeOf(QueenAttack);
  if (params && params.white === params.black) {
    throw new Error("Queens cannot share the same space");
  }

  Object.assign(self, params, constructBoard());
  //self.board = constructBoard();
  placePieces(self);

  self.canAttack = function () {
    if (self.black[0] === self.white[0] || self.black[1] === self.white[1]) {
      return true;
    }
    return Math.abs(self.black[0] - self.white[0]) === Math.abs(self.black[1] - self.white[1]);
  };

  self.toString = function () {
    return self.board.join('');
  };

  return self;
};

function constructBoard() {
  var row = buildRow("_ ", W).join('');
  row = row.substring(0, row.length - 1) + "\n";
  return { board: concatRows(row, H) };
}

function placePieces(self) {
  self.board[self.black[0] * W * 2 + self.black[1] * 2] = 'B';
  self.board[self.white[0] * W * 2 + self.white[1] * 2] = 'W';
}

function buildRow(cell, colCount) {
  return Array.apply(null, Array(colCount)).map(function () {
    return cell;
  });
}

function concatRows(row, rowCount) {
  return [].concat(_toConsumableArray(Array.prototype.concat.apply(buildRow(row, rowCount)).join('')));
}

exports["default"] = QueenAttack;
module.exports = exports["default"];