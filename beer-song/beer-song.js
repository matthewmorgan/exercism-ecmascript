'use strict';

let Beer = () => {
  return {
    verse: singAVerse,
    sing: sing
  }
};

const oneLeft = '1 bottle of beer on the wall, 1 bottle of beer.\n';
const passTheLast = 'Take it down and pass it around, no more bottles of beer on the wall.\n';
const getMore = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;

let singAVerse = (verseNum) => {
  let howMany = `${verseNum || 'No more'} bottles of beer on the wall, ${verseNum || 'no more'} bottles of beer.\n`;
  let passOne = `Take one down and pass it around, ${verseNum - 1} ${verseNum > 2 ? 'bottles' : 'bottle'} of beer on the wall.\n`;
  return  `${verseNum === 0 ? howMany + getMore : verseNum === 1 ? oneLeft + passTheLast : howMany + passOne}`;
};

let sing = (start, stop = 0) => {
  let result ='';
  while (start>=stop) {
    result+=singAVerse(start--)+'\n';
  }
  return result.trim()+'\n';
};


export default Beer();