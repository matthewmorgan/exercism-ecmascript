const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    RANKS = ['1st', '2nd', '3rd', '4th', '5th'];

const Meetup = (year, month, day, rank) => {
  const self = this instanceof Meetup ? this : new Object(Meetup.prototype);
  self.month = month;
  self.year = year;

  return (self[day + rank])();
};

DAYS.forEach(day => {
  Meetup.prototype[day + 'teenth'] = function () {
    const dayNum = getFirstDayNumber(this.year, this.month, day);
    const teenth = 14 + dayNum % 6 - Math.floor(dayNum / 6);
    return new Date(this.year, this.month, teenth);
  };
  RANKS.forEach(rank => {
    Meetup.prototype[day + rank] = function () {
      const dayNum = getFirstDayNumber(this.year, this.month, day);
      const n = RANKS.indexOf(rank);
      const nthDay = dayNum + (7 * n);
      const meetupDate = new Date(this.year, this.month, nthDay);
      if (meetupDate.getMonth() !== this.month) {
        throw "Date does not exist!";
      }
      return meetupDate;
    };
  });
  Meetup.prototype[day + 'last'] = function () {
    const dayNum = getFirstDayNumber(this.year, this.month, day);
    const n = 4;
    const nthDay = dayNum + (7 * n);
    let meetupDate = new Date(this.year, this.month, nthDay);
    meetupDate.getMonth() !== this.month ? meetupDate = new Date(this.year, this.month, nthDay - 7) : {};
    return meetupDate;
  }
});

const getFirstDayNumber = function (year, month, dayName) {
  const date = new Date(year, month, 1);
  while (DAYS[date.getDay()].toLowerCase() !== dayName.toLowerCase()) {
    date.setDate(date.getDate() + 1);
  }
  return date.getDate();
};

export default Meetup;