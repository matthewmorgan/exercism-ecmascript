const notAlpha = /[^a-z]+/gi,
      alphaLength = 26;
let unique;

export default class Pangram {

  constructor (candidate){
    const cleaned = (candidate.replace(notAlpha,'')).toLowerCase();
    unique = new Set([...cleaned]);
  }

  isPangram (){
    return unique.size === alphaLength;
  }
}