"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLERGENS = {
  "1": "eggs",
  "2": "peanuts",
  "4": "shellfish",
  "8": "strawberries",
  "16": "tomatoes",
  "32": "chocolate",
  "64": "pollen",
  "128": "cats"
};

var Allergies = function Allergies(score) {
  var _this = this;

  _classCallCheck(this, Allergies);

  this.list = function () {
    return Object.keys(ALLERGENS).reduce(function (prev, curr) {
      +curr & score ? prev.push(ALLERGENS[curr]) : prev;
      return prev;
    }, []);
  };

  this.allergicTo = function (allergen) {
    return _this.list().indexOf(allergen) >= 0;
  };
};

exports["default"] = Allergies;
module.exports = exports["default"];