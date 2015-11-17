let sides;
const TRIANGLE_KINDS = {1: 'equilateral', 2: 'isosceles', 3: 'scalene'};

const throwOnIllegalSides = () => {
  if (sides.some(side => side <= 0 )) throw new Error('Side lengths must be positive!');
};

const throwOnViolatesInequality = () => {
  if (sides[2] > (sides[0] + sides[1])) throw new Error('Sum of two sides must exceed third side!');
};


export default class Triangle {

  constructor(...args) {
    sides = args.sort();
  }

  kind() {
    throwOnIllegalSides();
    throwOnViolatesInequality();
    const uniqueSideCount = (new Set(sides)).size;
    return TRIANGLE_KINDS[uniqueSideCount];
  }

}