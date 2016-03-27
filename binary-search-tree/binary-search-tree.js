export default class BinarySearchTree {

  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }

  insert(value) {
    if (value <= this.data) {
      this.insertLeft(value);
    } else {
      this.insertRight(value);
    }
  }

  insertLeft(value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  insertRight(value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

  each(fn) {
    if (this.left) {
      this.left.each(fn);
    }
    fn.call(this, this.data);
    if (this.right) {
      this.right.each(fn);
    }
  }

  traverseDepthFirst() {
    this.visit(this);
    if (this.left) {
      this.left.traverseDepthFirst();
    }
    if (this.right) {
      this.right.traverseDepthFirst();
    }
  }

  traverseBreadthFirst(node) {
    const layer = [];
    node.visited = true;
    layer.push(node);

    while (layer.length > 0) {
      const r = layer.shift();
      this.visit(r);
      const neighbors = [];
      if (r.left) neighbors.push(r.left);
      if (r.right) neighbors.push(r.right);
      neighbors.forEach(neighbor => {
        if (!neighbor.visited) {
          neighbor.visited = true;
          layer.push(neighbor);
        }
      })
    }
  }


  visit(node) {
    console.log(node.data);
  }
}