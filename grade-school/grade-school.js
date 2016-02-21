export default () => {
  let roster = {},
      add = (student, grade) => {
        roster[grade] ? roster[grade].push(student) : roster[grade] = [student];
        roster[grade].sort();
      },
      getCopy = (db) => JSON.parse(JSON.stringify(db));


  return {
    roster: () => getCopy(roster),
    add: (student, grade) => add(student, grade),
    grade: (grade) => getCopy(roster[grade] || [])
  }
}