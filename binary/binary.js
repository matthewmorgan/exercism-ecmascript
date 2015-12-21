export default function(binary) {
  const b = binary.match(/[^01]/) ? '0' : binary;
  return {
    toDecimal: () => [...b].reduce((acc, curr) => acc*2 + parseInt(curr),0)
  };
};

