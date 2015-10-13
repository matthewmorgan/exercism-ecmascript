'use strict';

export default () => {
  return {
    verse: (num) => buildVerse(num),
    verses: (start, stop) => buildVerses(start, stop)
  }
}

let verses = {
  fly : {
    conclusion : "I don't know why she swallowed the fly. Perhaps she'll die."
  },
  spider : {
    comment: "It wriggled and jiggled and tickled inside her.",
    action: " that wriggled and jiggled and tickled inside her"
  },
  bird : {
    comment: "How absurd to swallow a bird!"
  },
  cat : {
    comment : "Imagine that, to swallow a cat!"
  },
  dog : {
    comment : "What a hog, to swallow a dog!"
  },
  goat : {
    comment : "Just opened her throat and swallowed a goat!"
  },
  cow : {
    comment : "I don't know how she swallowed a cow!"
  },
  horse : {
    conclusion: "She's dead, of course!"
  }
};

let animalNames = Object.keys(verses);

let buildVerse = (num, song, showComment = true) => {
  let name = animalNames[--num];
  let animal = verses[name];
  song = song || `I know an old lady who swallowed a ${name}.\n`;
  if (animal.conclusion){
    song += animal.conclusion+'\n';
    return song;
  }

  song += showComment ? animal.comment+"\n" : '';

  let nextName = animalNames[num-1];
  let nextAnimal = verses[nextName];
  song += `She swallowed the ${name} to catch the ${nextName}`;
  song += nextAnimal.action || '';
  song +='.\n';

  return buildVerse(num, song, false);
};

let buildVerses = (start, stop) => {
  let song = '';
  while (start <= stop){
    song += buildVerse(start++)+'\n';
  }
  return song;
};
