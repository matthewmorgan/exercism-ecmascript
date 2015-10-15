let targetWord = '';
let sortedWord = '';
let sortChars =(str) => str.toLowerCase().split('').sort().join('');
let match = (possible) => targetWord !== possible.toLowerCase() && (sortedWord === sortChars(possible));
let matches = (possibles) => possibles.filter(match);

export default (word) => {
  targetWord = word;
  sortedWord = sortChars(targetWord);
  return {
    matches: (possibles, ...more) => {
      Array.isArray(possibles) ? more = more.concat(possibles) : more.push(possibles);
      return matches(more)
    }
  }
}