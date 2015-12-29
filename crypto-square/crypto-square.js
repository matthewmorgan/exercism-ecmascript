let squareSize;

const getSegments = str => {
  const result = [];
  let source = [...str];
  while (source.length > 0) {
    result.push(source.splice(0, squareSize).join(''));
  }
  return result;
}

const getCipherText = square => {
  let cipherText = '';
  for (let ii = 0; ii < squareSize; ii++) {
    for (let jj = 0; jj < square.length; jj++) {
      cipherText += square[jj][ii] || "";
    }
  }
  return cipherText;
}

const normalizePlaintext = str => str.toLowerCase().replace(/[^\w]/g, '');
const getSquareSize = str => Math.ceil(Math.sqrt(str.length));

export default class Crypto {
  constructor(phrase) {
    squareSize = 0;
    return {
      normalizePlaintext:  () => normalizePlaintext(phrase),
      size:                () => getSquareSize(normalizePlaintext(phrase)),
      plaintextSegments:   function () {
        const normalized = normalizePlaintext(phrase);
        squareSize = this.size(normalized);
        return getSegments(normalized);
      },
      ciphertext:          function () {
        return getCipherText(this.plaintextSegments())
      },
      normalizeCiphertext: () => getSegments(this.ciphertext).join(' ')
    };
  }

}
