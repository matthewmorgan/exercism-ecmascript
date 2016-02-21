function getMatches(doesMatch, db, filter){
  const matches = [];
  for (let ii = 0; ii < db.length; ii++) {
    filter(db[ii]) === doesMatch
      && matches.push(db[ii]);
  }
  return matches;
}

export default ({
    keep:    (db, filter) => getMatches(true, db, filter),
    discard: (db, filter) => getMatches(false, db, filter)
});