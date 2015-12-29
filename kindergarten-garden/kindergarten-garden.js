const STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
const PLANTS = {'G': 'grass', 'C': 'clover', 'R': 'radishes', 'V': 'violets'};

function fetchStudentPlants(student, students, row1, row2) {
  const offset = students.indexOf(student) * 2;
  const plantCode = row1.slice(offset, offset + 2) + row2.slice(offset, offset + 2);
  return [...plantCode].map(code => PLANTS[code])
}

export default class KindergartenGarden {
  constructor(diagram, students) {
    this.students = students ? students.sort() : STUDENTS;
    this.row1 = diagram.split('\n')[0];
    this.row2 = diagram.split('\n')[1];
    this.students.forEach(student => {
      this[student.toLowerCase()] = fetchStudentPlants(student, this.students, this.row1, this.row2);
    });
  }
}

