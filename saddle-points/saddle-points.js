export default function(data) {
  const { rows, columns } = transposeMatrix(data);
  const { rowMaxs, colMins } = findMinMax(rows, columns);
  const saddlePoints = findSaddlePoints(rows, rowMaxs, colMins);
  return {rows, columns, saddlePoints};
}

function findSaddlePoints(rows, rowMaxs, colMins) {
  return rows.reduce((saddlePoints, row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === rowMaxs[rowIndex] && cell === colMins[colIndex]) {
        saddlePoints.push([rowIndex, colIndex]);
      }
    });
    return saddlePoints;
  }, []);
}

function transposeMatrix(data){
  const rows = [];
  const columns = [];
  data.split(/\n/).map(row => {
    rows.push(row.trim().split(/\s/).map((cell, jj) => {
      columns[jj] = (columns[jj] || []).concat(+cell);
      return +cell;
    }));
  });
  return {rows, columns};
}

function findMinMax(rows, columns){
  const rowMaxs = rows.map(row => Math.max.apply(null, row));
  const colMins = columns.map(col => Math.min.apply(null, col));
  return { rowMaxs, colMins };
}


