
class Stack {
  constructor(size = Infinity) {
    this.capacity = size;
    this.size = 0;
    this.storage = {};
  }

  insert(val) {
    this.size++;
    this.storage[this.size] = val;
    console.log(val);
  }

  getSize() {
    return this.size;
  }

  peek() {
    return this.storage[this.size];
  }

  pop() {
    if (this.size > 0) {
      let temp = this.storage[this.size];
      delete this.storage[this.size];
      this.size--;
      return temp;
    } else {
      console.log("Can no longer remove from empty stack");
    }
  }

}

exports.stack = Stack;
