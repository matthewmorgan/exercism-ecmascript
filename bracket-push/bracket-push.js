const BRACKETS = ['{', '[', '(', '}', ']', ')'];

export default function ([...str]) {
  let match;
  while (str.length > 0) {
    match = str.join('').match(/[\]\}\)]/);
    if (!match) return false;
    const pair = str.splice(match.index - 1, 2);
    if (BRACKETS.indexOf(pair[0]) !== BRACKETS.indexOf(pair[1]) - 3) return false;
  }
  return true;
};