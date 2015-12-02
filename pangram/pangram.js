const notAlpha = /[^a-z]+/gi,
      alphaLength = 26;


export default class Pangram {

  constructor (candidate){
    const cleaned = (candidate.replace(notAlpha,'')).toLowerCase();
    this.unique = new Set([...cleaned]);
  }

  isPangram (){
    return this.unique.size === alphaLength;
  }
}