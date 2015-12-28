class PigLatin {
  translate(english) {
    const englishWords = english.split(' ');
    const pigWords = [];
    englishWords.forEach(word => word.match(/^[aeiou]/)
        ? pigWords.push(translateVowelStart(word))
        : pigWords.push(translateConsonantStart(word)));
    return pigWords.join(' ');
  }
}

const translateVowelStart = word => word + 'ay';

const translateConsonantStart = word => {
  let result;
  const quCase = word.match(new RegExp(/^\w{0,1}qu/));
  quCase ? result = getPigWord(word, quCase[0]) : {};
  const chCase = word.match(new RegExp(/^\w{0,1}ch/));
  chCase ? result = getPigWord(word, chCase[0]) : {};
  const thCase = word.match(new RegExp(/^th[r]{0,1}/));
  thCase ? result = getPigWord(word, thCase[0]) : {};
  if (!result) {
    result = word.substr(1, word.length) + word.charAt(0) + 'ay';
  }
  return result;
};

const getPigWord = (word, suffix) => word
    .substr(suffix.length, word.length - suffix.length) + suffix + 'ay';

export default PigLatin;