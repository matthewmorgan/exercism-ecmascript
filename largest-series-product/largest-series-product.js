export default class Series {

  constructor(numString) {
    this.digits = [...numString].map( digit => +digit );
  }

  slices(size) {
    if (size > this.digits.length) {
      throw(new Error('Slice size is too big.'));
    }
    const result = [];
    for (let ii = 0; ii <= this.digits.length - size; ii++) {
      result.push(this.digits.slice(ii, ii + size));
    }
    return result;
  }

  largestProduct(size) {
    if (size > this.digits.length) {
      throw(new Error('Slice size is too big.'));
    }
    return this.slices(size)
        .map( tuple => tuple
        .reduce( (prev, curr) => prev *= curr, 1), [])
        .sort( (a, b) => b - a )[0];
  }

}