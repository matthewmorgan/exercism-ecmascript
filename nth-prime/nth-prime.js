import sieve from './sieve';  //my Sieve class from earlier

export default class Prime{

  // see http://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
  nth(n) {
    if (n < 1) throw new Error("Prime is not possible");
    let approximateLimit = n * Math.log(n) + n * Math.log(Math.log(n));
    approximateLimit < 15 ? approximateLimit = 15 : {};
    return sieve(approximateLimit).primes[n - 1];
  }
}


