const mod = (dividend, divisor) => dividend % divisor;
const db = (a, b) => mod(a, b) === 0;
const is = ({
  divisibleBy: db,
  not:         {
    divisibleBy: (a, b) => !db(a, b)
  }
});

export default year => is.divisibleBy(year, 400)
                    || is.divisibleBy(year, 4)
                    && is.not.divisibleBy(year, 100);
