const MIN_PER_DAY = 1440,
      MIN_PER_HOUR = 60;

export default (hour = 0, minute = 0) => {
  throwIfInputsInvalid(hour, minute);
  let clock = hour * MIN_PER_HOUR + minute;

  function adjustTime(delta) {
    throwIfInputsInvalid(delta);
    clock = (clock + delta) % MIN_PER_DAY;
    if (clock < 0) {
      adjustTime(MIN_PER_DAY);
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

  function throwIfInputsInvalid(a, b = 0){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
      throw 'Invalid input!';
    }
  }
  return Object.freeze({plus, minus, toString, equals, clock});
};

