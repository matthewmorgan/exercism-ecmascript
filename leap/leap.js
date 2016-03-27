const mod = (dividend, divisor) => dividend % divisor;
const is = ({
  divisibleBy: (a, b) =>  mod(a,b) === 0,
  notDivisibleBy: (a, b) =>  mod(a,b) !== 0
});

export default year => is.divisibleBy(year, 400)
                      || is.divisibleBy(year, 4)
                      && is.notDivisibleBy(year, 100);
