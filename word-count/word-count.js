//export default () => ({
//  count: (phrase) => phrase.trim().split(/\s+/).reduce((counts, word) => {
//    counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
//    return counts;
//  }, {})
//})

export default class Words {
  count (input) {
    return this._mapToObj(
        // @matthewmorgan made me do this
        input.trim().split(/\s+/).reduce((wordMap, word) => {
          return wordMap.set(word, (wordMap.get(word) || 0) + 1)
        }, new Map)
    )
  }
  _mapToObj(m){let o={};for(let [k,v] of m){o[k]=v}return o}
}