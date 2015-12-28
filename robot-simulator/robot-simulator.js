const DIRECTIONS = ['north', 'east', 'south', 'west'];
const INSTRUCTIONS = {L: 'turnLeft', R: 'turnRight', A: 'advance'};

export default class RobotSimulator {

  orient(dir) {
    if (DIRECTIONS.indexOf(dir) < 0) throw "Invalid Robot Bearing";
    this.bearing = dir;
  }

  turnRight() {
    this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) + 1) % 4];
  }

  turnLeft() {
    this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing) + 3) % 4];
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    const setCoords = {
      'north': () => this.coordinates[1]++,
      'south': () => this.coordinates[1]--,
      'east':  () => this.coordinates[0]++,
      'west':  () => this.coordinates[0]--
    };
    setCoords[this.bearing].call(this);
  }

  place(place) {
    this.orient(place.direction);
    this.at(place.x, place.y);
  }

  instructions(commands) {
    return [...commands].reduce((prev, curr) => {
      prev.push(INSTRUCTIONS[curr]);
      return prev;
    }, []);
  }

  evaluate(commands) {
    this.instructions(commands).forEach(command => this[command].call(this));
  }
}