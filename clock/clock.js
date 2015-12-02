export default function (hour, minute) {
  const MINUTESPERDAY = 1440;
  const self = this;
  let clock = (hour || 0) * 60 + (minute || 0);

  function formatChunk(num) {
    const numString = new String(num);
    return numString.length === 1 ? "0" + numString : numString;
  };

  function formatTime(clock){
    return formatChunk(Math.floor(clock / 60))
        + ":" + formatChunk(clock % 60)
  }

  function adjustTime(delta) {
    delta = delta >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;
    let newMinutes = (clock + delta) % MINUTESPERDAY;
    clock = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;
  }

  return {
    clock:    clock,
    toString:  function() {
      return formatTime(clock);
    },
    plus:      function(minutes){
      adjustTime(minutes);
      return self;
    },
    minus:    function (minutes) {
      adjustTime(-minutes);
      return this;
    },
    equals:   function (other) {
      return clock === other.clock;
    }
  }
};

