const MINUTESPERDAY = 1440;

export default function (hour, minute) {
  let clock;
  clock = (hour || 0) * 60 + (minute || 0);

  const adjustTime = delta => {
    delta = delta >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;
    let newMinutes = (clock + delta) % MINUTESPERDAY;
    clock = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;
    return this;
  };

  const formatChunk = num => {
    const numString = new String(num);
    return numString.length === 1 ? "0" + numString : numString;
  };

  const formatTime = clock => {
    return formatChunk(Math.floor(clock / 60))
        + ":" + formatChunk(clock % 60)
  };

  return {
    plus:     function (minutes) {
      adjustTime(minutes);
      return this;
    },
    minus:    function (minutes) {
      adjustTime(-minutes);
      return this;
    },
    toString: () => formatTime(clock),
    equals:   other => clock === other.clock,
    clock: clock
  };

};

