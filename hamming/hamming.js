export default () => ({
    compute: (strand1 = '', strand2 = '') => {
      if (strand1.length !== strand2.length) throw new Error("DNA strands must be of equal length.");
      return [...strand1].filter((nuc, pos) => nuc !== strand2.charAt(pos)).length;
    }
  });