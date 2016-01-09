//export default function (input) {
//  this.columns = [];
//  this.rows = input.split('\n')
//      .map(row => {
//        return row.split(' ')
//            .reduce((prev, curr) => {
//              prev.push(+curr);
//              return prev;
//            }, []);
//      });
//
//  for (let ci = 0; ci < this.rows.length; ci++) {
//    this.columns[ci] = [];
//    this.rows.forEach(row => {
//      this.columns[ci].push(row[ci]);
//    });
//  }
//}
//
//
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Matrix = (function () {
  function Matrix(str) {
    _classCallCheck(this, Matrix);

    this.rows = str.split('\n').map(function (r) {
      return r.split(/\s+/).map(function (i) {
        return Number(i);
      });
    });
  }

  _createClass(Matrix, [{
    key: 'columns',
    get: function get() {
      var _this = this;

      return this.rows[0].map(function (col, i) {
        return _this.rows.map(function (row) {
          return row[i];
        });
      });
    }
  }]);

  return Matrix;
})();

exports['default'] = Matrix;
module.exports = exports['default'];