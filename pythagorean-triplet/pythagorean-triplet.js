const sum = (a, b, c) => a + b + c;
const product = (a, b, c) => a * b * c;
const isPythagorean = (a, b, c) => a * a + b * b === c * c;

const triplets = params => {
  const max = params.maxFactor;
  const min = params.minFactor || 2;
  const targetSum = params.sum;
  let result = [];
  for (let ii = min; ii <= max; ii++) {
    for (let jj = ii + 1; jj <= max; jj++) {
      for (let kk = jj + 1; kk <= max; kk++) {
        isPythagorean(ii, jj, kk) ? result.push(new Triplet(ii, jj, kk)) : {};
      }
    }
  }

  function isTargetSum(triplet) {
    return triplet.sum() === targetSum;
  }

  targetSum ? result = result.filter(isTargetSum) : {};
  return result;
};

export default class Triplet {
  constructor(a, b, c) {
    return {
      sum:           () => sum(a, b, c),
      product:       () => product(a, b, c),
      isPythagorean: () => isPythagorean(a, b, c)
    };
  }

  static where(params) {
    return triplets(params);
  }
}
