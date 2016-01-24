"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALLERGENS = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"];

exports["default"] = function (score) {
  var _this = this;

  {
    this.list = function () {
      return ALLERGENS.filter(function (_, i) {
        return Math.pow(2, i) & score;
      });
    };
    this.allergicTo = function (allergen) {
      return _this.list().includes(allergen);
    };
  }
};

module.exports = exports["default"];