//export default class CustomSet {
//  constructor(data = []) {
//    this.data = {};
//    data.forEach(el => this.put(el));
//    this.comparator = typeof data[0] === 'number' ?
//      (a, b) => a - b
//      : (a, b) => b <= a
//      ? 1 : -1;
//  }
//
//  delete(el) {
//    delete this.data[el];
//    return this;
//  }
//
//  eql(other) {
//    return this.difference(other).size() === 0;
//  }
//
//  difference(other) {
//    return new CustomSet(Object.keys(this.data).filter(el => other.data[el] === undefined));
//  }
//
//  disjoint(other) {
//    return this.size === 0 || this.difference(other).size() === this.size();
//  }
//
//  intersection(other) {
//    return this.difference(this.difference(other));
//  }
//
//  union(other) {
//    return new CustomSet(this.toList().concat(this.difference(other).toList()));
//  }
//
//  subset(other) {
//    return other.eql(this.intersection(other));
//  }
//
//  toList() {
//    return Object.keys(this.data).map(el =>  +el);
//  }
//
//  member(el) {
//    return this.data[el] !== undefined;
//  }
//
//  put(value) {
//    this.data[value] = value;
//    return this;
//  }
//
//  sort() {
//    this.data.sort(this.comparator);
//  }
//
//  size() {
//    return Object.keys(this.data).length;
//  }
//
//  empty() {
//    this.data = {};
//    return this;
//  }
//}

export default class CustomSet {

  constructor(ary) {
    this.set = ary ? ary.sort().filter(onlyUnique) : [];
  }

  delete(v) {
    this.set.splice(this.set.indexOf(v), 1);
    return this;
  }

  eql(other) {
    return this.toString() === other.toString();
  }

  toString() {
    this.set.toString();
  }

  difference(other) {
    return new CustomSet( this.set.filter(el => other.set.indexOf(el) < 0) );
  }
  intersection(other) {
    return new CustomSet( this.set.filter(el => other.set.indexOf(el) >= 0) );
  }

  disjoint(other) {
    return  this.set.every(el => other.set.indexOf(el) < 0);
  }

  empty() {
    this.set = [];
    return this;
  }

  member(v) {
    return this.set.indexOf(v) >= 0;
  }

  put(v) {
    this.set.concat(v).sort().filter(onlyUnique);
    return this;
  }

  size() {
    return this.set.length;
  }

  subset(other) {
    const self = this;
    return other.set.every(el => self.member(el));
  }

  toList() {
    return this.set;
  }

  union(other) {
    return new CustomSet( this.set.concat(other.set) );
  }
}

const  onlyUnique = (value, index, self) => self.indexOf(value) === index;
