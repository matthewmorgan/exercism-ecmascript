//export default () => {
//  let roster = {},
//      add = (student, grade) => {
//        roster[grade] ? roster[grade].push(student) : roster[grade] = [student];
//        roster[grade].sort();
//      },
//      getCopy = (db) => JSON.parse(JSON.stringify(db));
//
//
//  return {
//    roster: () => getCopy(roster),
//    add: (student, grade) => add(student, grade),
//    grade: (grade) => getCopy(roster[grade] || [])
//  }
//}

let roster;

class School {
  constructor() {
    roster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(roster));
  }

  add(name, grade) {
    roster[grade] = this.grade(grade).concat(name).sort();
  }

  grade(grade) {
    return Array.from(roster[grade] || []);
  }

}

export default School;