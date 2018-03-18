
class Tree {
  // implement tree structure here
  constructor(val) {
    this.value = val;
    this.children = [];
  }

  // add a child to part of the tree
  addChild(val) {
    this.children.push(new Tree(val))
  }

  // implement whether tree contains given value
  contains(val) {

  }

  // go depth first
  depthFirst(cb) {

  }

  // go breadth first (every level)
  breadthFirst(cb) {

  }



}
