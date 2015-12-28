// see http://stackoverflow.com/questions/15593428
export default n => {
  return {
    squareOfSums: Math.pow(n * (n + 1) / 2, 2),
    sumOfSquares: Math.pow(n, 3) / 3 + Math.pow(n, 2) / 2 + n / 6,
    difference:   -(3 * Math.pow(n, 2) + 2 * n) * (1 - Math.pow(n, 2)) / 12
  };
};