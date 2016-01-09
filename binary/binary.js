export default binary =>  {
  const b = binary.match(/[^01]/) ? '0' : binary;
  return {
    toDecimal: () => [...b].reduce((dec, bin) => dec*2 + parseInt(bin),0)
  };
};


