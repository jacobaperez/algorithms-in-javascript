
class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
  }

  addToHead(val) {
    this.head.next = new Node(val);
    // find better way to orient the tail
    // this.tail = this.head.next;
  }

  forEach(cb) {
    let node = this.head;
    while(node) {
      cb(node.data);
      node = node.next;
    }
  }


}


class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }


}
