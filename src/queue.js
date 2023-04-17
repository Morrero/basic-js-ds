const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


class Queue {
  constructor() {
    this.top = null;
    this.last = null;
  }
  
  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.top) {
      this.last.next = node;
      this.last = node;
    } else {
      this.top = node;
      this.last = node;
    }
  }

  dequeue() {
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
}

module.exports = {
  Queue
};
