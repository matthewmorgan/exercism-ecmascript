'use strict';

export default () => {
  return {
    count: (phrase) => phrase.trim().split(/\s+/).reduce((counts, word) => {
      counts[word] = counts.hasOwnProperty(word) ? counts[word]+1 : 1;
      return counts;
    }, {})
  }
}