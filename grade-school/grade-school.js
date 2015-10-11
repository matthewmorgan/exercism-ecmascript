'use strict';

export default () => {
  let roster = {};
  let add = (student, grade) => {
    roster[grade] ? roster[grade].push(student) : roster[grade] = [student];
    roster[grade].sort();
  };
  let getReadOnly = (db) => JSON.parse(JSON.stringify(db));

  return {
    roster: () => getReadOnly(roster),
    add: (student, grade) => add(student, grade),
    grade: (grade) => getReadOnly(roster[grade] || [])
  }
}