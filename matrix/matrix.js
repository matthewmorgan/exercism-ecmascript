//export default function (input) {
//  this.columns = [];
//  this.rows = input.split('\n')
//      .map(row => {
//        return row.split(' ')
//            .reduce((prev, curr) => {
//              prev.push(+curr);
//              return prev;
//            }, []);
//      });
//
//  for (let ci = 0; ci < this.rows.length; ci++) {
//    this.columns[ci] = [];
//    this.rows.forEach(row => {
//      this.columns[ci].push(row[ci]);
//    });
//  }
//}
//
//
//

export default class Matrix {

  constructor(str) {
    this.rows = str.split('\n').map(r => r.split(/\s+/).map(i => Number(i)));
  }

  get columns()  {
    return this.rows[0].map((col,i) =>
        this.rows.map(row => row[i])
    );
  }

}
