export default class Crypto {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.squareSize = calculateSquareSize(this.normalizePlaintext(this.phrase));
    this.ciphertext = () => getCipherText(this.plaintextSegments(), this.squareSize);
    this.size = () => this.squareSize;
  }

  plaintextSegments(){
    return getSegments(this.normalizePlaintext(this.phrase), this.squareSize);
  }

  normalizeCipherText(){
    return getSegments(this.ciphertext, this.squareSize).join(' ');
  }

  normalizePlaintext(){
    return this.phrase.replace(/[\W]/g, '');
  }
}

function calculateSquareSize(str){
  return Math.ceil(Math.sqrt(str.length));
}

function getSegments(str, segmentSize) {
  const result = [];
  let source = [...str];
  while (source.length > 0) {
    result.push(source.splice(0, segmentSize).join(''));
  }
  return result;
}

function getCipherText(square, segmentSize){
  let cipherText = '';
  for (let ii = 0; ii < segmentSize; ii++) {
    for (let jj = 0; jj < square.length; jj++) {
      cipherText += square[jj][ii] || "";
    }
  }
  return cipherText;
}