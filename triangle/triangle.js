const TRIANGLE_KINDS = {1: 'equilateral', 2: 'isosceles', 3: 'scalene'};

const numerically = (a,b) => a-b;

export default class {
  constructor(...args) {
    this.sides = args.sort(numerically);
  }

  kind() {
    this.throwOnIllegalSides();
    this.throwOnViolatesInequality();
    const uniqueSideCount = (new Set(this.sides)).size;
    return TRIANGLE_KINDS[uniqueSideCount];
  }

  throwOnIllegalSides() {
    if (this.sides.some(side => side <= 0 ))
      throw new Error('Side lengths must be positive!');
  }

  throwOnViolatesInequality(){
    if (this.sides[2] > (this.sides[0] + this.sides[1]))
      throw new Error('Sum of two sides must exceed third side!');
  }
}