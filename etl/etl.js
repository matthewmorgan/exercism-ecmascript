export default old =>
    Object.entries(old).reduce((map, [score, letters]) => {
    letters.forEach( letter => map[letter.toLowerCase()] = +score);
    return map;
  }, {})