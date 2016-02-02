const BREAK_WORDS = /[A-Z]+[a-z]*|[a-z]+/g;
export default {
  parse: phrase => phrase.match(BREAK_WORDS)
      .reduce((acronym, word) => acronym.concat(word[0]),'')
      .toUpperCase()
}
