const getMatches = (doesMatch, db, filter) => {
  const matches = [];
  for (let ii = 0; ii < db.length; ii++) {
    doesMatch === filter(db[ii]) ? matches.push(db[ii]) : {};
  }
  return matches;
};

export default (function () {
  return {
    keep:    (db, filter) => getMatches(true, db, filter),
    discard: (db, filter) => getMatches(false, db, filter)
  };
})();

