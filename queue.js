// Queue FIFO first in first out

class Queue {
  constructor(capacity = Infinity) {
    this.capacity = capacity;
    this.place = 0;
    this.next = 0;
    this.size = 0;
    this.storage = {};
  }

  insert(val) {
    if (this.size < this.capacity) {
      this.size++;
      this.storage[this.place] = val;
      // console.log(this.storage[this.place]);
      return this.storage[this.place++];
    } else {
      console.log("Queue capacity reached!");
      return null;
    }
  }

  peek() {
    if (this.size !== 0) {
      // console.log(this.storage[this.next]);
      return this.storage[this.next];
    } else {
      console.log("Empty Queue");
      return null;
    }
}

  pop() {
    if (this.size !== 0) {
      let temp = this.storage[this.next];
      delete this.storage[this.next++];
      this.size--;
      return temp;
    } {
      console.log("Empty Queue");
      return null;
    }

  }



}
