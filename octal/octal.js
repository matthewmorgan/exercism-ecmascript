export default input => {
  const o = input.match(/[^0-7]/) ? '0' : input;
  return {
    toDecimal: () => [...o].reduce((dec, digit) => +digit + dec * 8, 0)
  };
};
