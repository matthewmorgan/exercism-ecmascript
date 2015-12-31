'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    RANKS = ['1st', '2nd', '3rd', '4th', '5th'];

var Meetup = function Meetup(year, month, day, rank) {
  var self = undefined instanceof Meetup ? undefined : new Object(Meetup.prototype);
  self.month = month;
  self.year = year;

  return self[day + rank];
};

DAYS.forEach(function (day) {
  Meetup.prototype[day + 'teenth'] = function () {
    var dayNum = getFirstDayNumber(this.year, this.month, day);
    var teenth = 14 + dayNum % 6 - Math.floor(dayNum / 6);
    return new Date(this.year, this.month, teenth);
  };
  RANKS.forEach(function (rank) {
    Meetup.prototype[day + rank] = function () {
      var dayNum = getFirstDayNumber(this.year, this.month, day);
      var n = RANKS.indexOf(rank);
      var nthDay = dayNum + 7 * n;
      var meetupDate = new Date(this.year, this.month, nthDay);
      if (meetupDate.getMonth() !== this.month) {
        throw "Date does not exist!";
      }
      return meetupDate;
    };
  });
  Meetup.prototype[day + 'last'] = function () {
    var dayNum = getFirstDayNumber(this.year, this.month, day);
    var n = 4;
    var nthDay = dayNum + 7 * n;
    var meetupDate = new Date(this.year, this.month, nthDay);
    meetupDate.getMonth() !== this.month ? meetupDate = new Date(this.year, this.month, nthDay - 7) : {};
    return meetupDate;
  };
});

var getFirstDayNumber = function getFirstDayNumber(year, month, dayName) {
  var date = new Date(year, month, 1);
  while (DAYS[date.getDay()].toLowerCase() !== dayName.toLowerCase()) {
    date.setDate(date.getDate() + 1);
  }
  return date.getDate();
};

exports['default'] = Meetup;
module.exports = exports['default'];