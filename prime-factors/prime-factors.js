export default() => ({
    for: num => {
      let factors = [],
          currentFactor = 2;

      while (num !== 1) {
        if (num % currentFactor === 0) {
          factors.push(currentFactor);
          num /= currentFactor;
        } else {
          currentFactor++;
        }
      }
      return factors;
    }
})
