const MIN_PER_DAY = 1440,
    MIN_PER_HOUR = 60;

export default (hour = 0, minute = 0) => {
  let clock = hour * MIN_PER_HOUR + minute;

  function adjustTime(delta) {
    clock += delta;
    if (clock < 0) {
      adjustTime(MIN_PER_DAY);
    }
    if (clock > MIN_PER_DAY) {
      clock = clock % MIN_PER_DAY;
    }
  }

  function toString() {
    return `${ pad(Math.floor(clock / MIN_PER_HOUR)) }:${ pad(clock % MIN_PER_HOUR) }`;
  }

  function plus(minutes) {
    adjustTime(minutes);
    return this;
  }

  function minus(minutes) {
    plus(-minutes);
    return this;
  }

  function equals(other) {
    return clock === other.clock;
  }

  function pad(str){
    return `0${ str }`.slice(-2);
  }

  return Object.freeze({plus, minus, toString, equals, clock});
};

