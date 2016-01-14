const isDivisibleBy = (dividend, divisor) => !(dividend % divisor);
const isNotDivisibleBy = (dividend, divisor) => (dividend % divisor);

export default year => isDivisibleBy(year, 400)
                    || isDivisibleBy(year, 4)
                    && isNotDivisibleBy(year, 100);


