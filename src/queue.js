const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head < this.tail) {
      let removed = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return removed;
    }
    return undefined;1
  }
}

module.exports = {
  Queue,
};
