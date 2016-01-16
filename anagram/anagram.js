let targetWord, sortedWord;

export default word => {
  targetWord = word;
  sortedWord = sortChars(targetWord);
  return {
    matches: (possibles, ...more) => {
      Array.isArray(possibles) ? more = more.concat(possibles) : more.push(possibles);
      return matches(more);
    }
  }
}

const sortChars = str => [...str.toLowerCase()].sort().join('');
const matches= possibles => possibles.filter(match);
const match = possible => targetWord !== possible.toLowerCase()
                          && (sortedWord === sortChars(possible));

