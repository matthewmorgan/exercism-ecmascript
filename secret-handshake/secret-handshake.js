const ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];

export default function (shake) {
  if (typeof shake !== 'number') throw new Error("Handshake must be a number");
  return {
    commands: () => {
      const actions = ACTIONS.reduce((sequence, move, ii) => {
        shake & Math.pow(2, ii) ? sequence.push(move) : {};
        return sequence;
      }, []);
      return shake & 16 ? actions.reverse() : actions;
    }
  };
}