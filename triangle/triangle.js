let sides;
const TRIANGLE_KINDS = {1: 'equilateral', 2: 'isosceles', 3: 'scalene'};

const hasSize = () => {
  if (sides.some(side => side === 0 )) throw new Error('Triangles must have size!');
};

const hasNoNegativeSides = () => {
  if (sides.some(side => side < 0)) throw new Error('Negative sides are not allowed!');
};

const doesntViolateInequality = () => {
  if (sides[2] > (sides[0] + sides[1])) throw new Error('Sum of two sides must exceed third side!');
};


export default class Triangle {

  constructor(...args) {
    sides = args.sort();
  }

  kind() {
    hasSize();
    hasNoNegativeSides();
    doesntViolateInequality();
    const uniqueSideCount = (new Set(sides)).size;
    return TRIANGLE_KINDS[uniqueSideCount];
  }

}