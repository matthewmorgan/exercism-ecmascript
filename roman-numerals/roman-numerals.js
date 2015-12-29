const ROMANS = {
  1: ['','I','II','III','IV','V','VI','VII','VIII','IX'],
  10: ['', 'X', 'XX', 'XXX', 'XL','L','LX','LXX','LXXX','XC'],
  100: ['','C', 'CC','CCC','CD','D','DC','DCC','DCCC','CM'],
  1000: ['','M','MM','MMM']
};

export default decimal => [...decimal.toString()]
        .reduce((prev, current, ii, original) => prev+ROMANS[Math.pow(10, original.length-1-ii)][+current], '')