const f = [];
const factorial = (n) => n <= 1 ? 1 : f[n] || factorial(n - 1) * n;

const cellValue = (n, k) => factorial(n) / factorial(k) / factorial(n - k);

const generateRows = (rowCount) => {
  const rows = Array.from({length: rowCount}, (_, ii) =>
      Array.from({length: ii + 1}, (_, jj) => cellValue(ii, jj)));
  return [rows, rows[rows.length - 1]];
};

export default class Triangle {
  constructor(rowCount) {
    this.rowCount = rowCount;
    [this.rows, this.lastRow] = generateRows(this.rowCount);
  }
}