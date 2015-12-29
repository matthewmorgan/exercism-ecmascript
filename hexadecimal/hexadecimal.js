const BASE = 16, HEXES = '0123456789abcdef', PATTERN = /[0-9a-f]+/g;

export default class Hexadecimal {
  constructor(input) {
    this.input = input.toLowerCase().match(PATTERN)[0];
    this.input.length !== input.length ? this.input = '' : {};
  }

  toDecimal() {
    return [...this.input]
        .reduce((decTotal, hexDigit) => decTotal * BASE + HEXES.indexOf(hexDigit), 0);
  }
}