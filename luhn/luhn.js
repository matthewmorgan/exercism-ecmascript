export default class Luhn {
  constructor(accountNumber) {
    this.number = accountNumber;
    this.digits = [...String(accountNumber)].reverse();
    this.checkDigit = getCheckDigit(this.digits);
    this.checksum = getChecksum(this.digits);
    this.addends = getAddends(this.digits);
    this.valid = isValid(this.digits);
  }

  static create(accountNumber, digit = 0) {
    const luhn = new Luhn(accountNumber + String(digit));
    return luhn.valid ? +luhn.number : Luhn.create(accountNumber, digit + 1);
  }
}

const getAddends = digits => digits
    .reduce((prev, curr, ii) => {
      ii % 2 !== 0 ? prev.push(+curr * 2 > 9 ? +curr * 2 - 9 : +curr * 2)
          : prev.push(+curr);
      return prev;
    }, [])
    .reverse();

const getCheckDigit = digits => parseInt(digits[0]);

const isValid = digits => getChecksum(digits) % 10 === 0;

const getChecksum = digits => getAddends(digits)
    .reduce((prev, curr) => prev += curr, 0);