export default (limit) => ({
  primes: [...range(2, limit)]
              .filter(number => isPrime(number))
})

function isPrime(number) {
  return [...range(2, number / 2)]
          .filter(possibleFactor => number % possibleFactor === 0)
          .length === 0;
}

function *range(curr, limit) {
  if (curr > limit) return;
  yield curr;
  yield *range(curr += 1, limit)
}
