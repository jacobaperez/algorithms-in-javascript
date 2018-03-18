
class LinkedList {
  constructor(val) {
    if (val) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      console.error("Please enter an initial value");
      return;
    }
  }

  // adds to head of the linked list
  addToHead(val) {
    let newhead = new Node(val);
    let oldHead = this.head;
    newhead.next = oldHead;
    this.head = newhead;
  }

  //function used for testing.
  check() {
    console.log(this);
  }



  // forEach(cb) {
  //   let node = this.head;
  //   while(node) {
  //     cb(node.data);
  //     node = node.next;
  //   }
  // }


}

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

exports.linkedlist = LinkedList;
