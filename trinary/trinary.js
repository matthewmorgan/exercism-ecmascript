export default input => {
  const t = input.match(/[0-2]/) ? input : '0';
  return {
    toDecimal: () => [...t].reduce((dec, digit) => +digit + dec * 3, 0)
  };
};
