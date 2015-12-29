export default limit => {
  let p = 2;
  const range = [],
      primes = [];
  for (let ii = 2; ii <= limit; ii++) {
    range[ii] = {val: ii, prime: true};
  }

  for (let ii = 2; ii <= limit / 2; ii++) {
    for (let jj = 2 * p; jj <= limit; jj += p) {
      range[jj].prime = false;
    }
    p++;
  }
  for (let key in range) {
    range[key].prime ? primes.push(+key) : null;
  }
  return {
    primes: primes
  };
};


