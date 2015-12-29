'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
var PLANTS = { 'G': 'grass', 'C': 'clover', 'R': 'radishes', 'V': 'violets' };

function fetchStudentPlants(student, students, row1, row2) {
  var offset = students.indexOf(student) * 2;
  var plantCode = row1.slice(offset, offset + 2) + row2.slice(offset, offset + 2);
  return [].concat(_toConsumableArray(plantCode)).map(function (code) {
    return PLANTS[code];
  });
}

var KindergartenGarden = function KindergartenGarden(diagram, students) {
  var _this = this;

  _classCallCheck(this, KindergartenGarden);

  this.students = students ? students.sort() : STUDENTS;
  this.row1 = diagram.split('\n')[0];
  this.row2 = diagram.split('\n')[1];
  this.students.forEach(function (student) {
    _this[student.toLowerCase()] = fetchStudentPlants(student, _this.students, _this.row1, _this.row2);
  });
};

exports['default'] = KindergartenGarden;
module.exports = exports['default'];