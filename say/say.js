const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six'
                , 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
                , 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen'
                , 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'
                    , 'seventy', 'eighty', 'ninety'];
const PLACENAMES = ['', 'thousand', 'million', 'billion'];

function splitByPowers(num) {
  let m = Math.pow(10, num.toString().length);
  return [...num.toString()]
      .map(el => +el * (m /= 10))
      .reverse();
}

export default class Say {
  slices() {
    const digits = [...this.digits];
    const result = [digits.splice(0, digits.length % 3).join('')];
    while (digits.length > 0) {
      result.push(digits.splice(0, 3).join(''));
    }
    return result;
  }

  parse() {
    let placeNameIndex = 0;
    const english = [];
    this.slices().reverse().forEach(digit => {
      let thousand = this.parseThousand(digit).join(' ') + ' ';
      if (thousand.trim().length > 0) {
        english.push((thousand += PLACENAMES[placeNameIndex]).trim());
      }
      placeNameIndex++;
    });
    return english.reverse().join(' ');
  }

  parseThousand(num) {
    const powers = splitByPowers(num);
    const segments = [];
    if (powers[1] === 10) {
      const index = 10 + powers[0];
      segments.push(ONES[index]);
    } else {
      segments.push(ONES[powers[0]]);
      segments.push(TENS[powers[1] / 10]);
    }
    if (segments[1] && segments[0]) {
      const hyphenated = segments.splice(0, 2).reverse().join('-');
      segments.unshift(hyphenated);
    }
    powers[2] ? segments.push(ONES[powers[2] / 100] + ' hundred') : {};
    return segments.reverse();
  }

  inEnglish(num) {
    if (!num) return 'zero';
    if (num < 0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
    this.digits = num.toString();
    this.english = this.parse();
    return this.english;
  }
}