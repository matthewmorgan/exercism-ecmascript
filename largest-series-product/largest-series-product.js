export default class Series {
  constructor(numString) {
    this.digits = [...numString]
        .map(digit => +digit);
  }

  slices(size) {
    return this.digits.reduce((container, _, i) => {
          i + size <= this.digits.length &&
            container.push({begin: i, end: i + size});
          return container;
        }, [])
  }

  largestProduct(size) {
    if (size > this.digits.length) {
      throw new Error('Slice size is too big.');
    }
    return this.slices(size)
        .map(bounds => this.digits.slice(bounds.begin, bounds.end)
            .reduce((product, factor) => product *= factor, 1)
        )
        .sort((a, b) => b - a)[0] || 1;
  }
}