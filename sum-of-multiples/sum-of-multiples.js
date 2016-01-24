export default (factors = [3, 5]) => {

  return Object.freeze({factors, to});

  function to(limit) {
    return factors.reduce((sum, factor) => {
      [...range(factor, limit, factor)]
      .map(multiple => {
        multiples.add(multiple);
      },0);
    });

    return sum;
  }
};

function *range(curr, end, step) {
  if (curr >= end) return;
  yield curr;
  yield *range(curr += step, end, step);
}