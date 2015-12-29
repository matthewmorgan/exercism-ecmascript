const f = [];
const factorial = n => {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n - 1) * n;
};

const cellValue = (n, k) => {
  return factorial(n) / factorial(k) / factorial(n - k);
};

const generateRows = (rowCount) => {
  const rows = [];
  for (let ii = 0; ii < rowCount; ii++) {
    const row = [];
    for (let jj = 0; jj < ii + 1; jj++) {
      row.push(cellValue(ii, jj));
    }
    rows.push(row);
  }
  const lastRow = rows[rows.length - 1];
  return [lastRow, rows];
};

export default class Triangle {
  constructor(rowCount) {
    this.rowCount = rowCount;
    let [lastRow, rows] = generateRows(this.rowCount);
    this.lastRow = lastRow;
    this.rows = rows;
  }
}