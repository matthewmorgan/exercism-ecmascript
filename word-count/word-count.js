export default () => ({
  count: (phrase) => phrase
      .trim()
      .split(/\s+/)
      .reduce((counts, word) => {
      counts[word]++ || (counts[word] = 1);
      return counts;
  }, {})
})


