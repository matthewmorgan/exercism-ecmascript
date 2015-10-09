'use strict';

export default () => {
  return {
    compute: (a, b) => {
      if (!a || !b || (a.length !== b.length)) {
        throw (new Error("DNA strands must be of equal length."))
      }
      return a.split('').reduce((prev, curr, ii) => prev += (curr !== b.charAt(ii) ? 1 : 0), 0);
    }
  }
};