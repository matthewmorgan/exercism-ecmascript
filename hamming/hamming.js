'use strict';

export default () => {
  return {
    compute: (a = '', b = '') => {
      if (a.length !== b.length) throw new Error("DNA strands must be of equal length.");
      return a.split('').filter((aNuc, ii) => aNuc !== b.charAt(ii)).length;
    }
  }
};