export default function (input) {
  this.columns = [];
  this.rows = input.split('\n')
      .map(row => {
        return row.split(' ')
            .reduce((prev, curr) => {
              prev.push(+curr);
              return prev;
            }, []);
      });

  for (let ci = 0; ci < this.rows.length; ci++) {
    this.columns[ci] = [];
    this.rows.forEach(row => {
      this.columns[ci].push(row[ci]);
    });
  }
}



