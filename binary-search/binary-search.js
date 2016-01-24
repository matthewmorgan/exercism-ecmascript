export default class Search {
  constructor(data) {
    if (isSorted(data)) this.array = data;
  }

  indexOf(target, lower = 0, upper = this.array.length - 1) {
    const cursor = lower + Math.ceil((upper - lower) / 2);
    const el = this.array[cursor];
    if (el === target) return cursor;
    else if (upper === lower && el !== target) return -1;

    el > target ? upper = cursor : lower = cursor;
    return this.indexOf(target, lower, upper);
  }
}

function isSorted(arr) {
  return arr
      .every((el, ii) => ii === 0 || el >= arr[ii - 1])
}

