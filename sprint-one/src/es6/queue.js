class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.tail = -1;
  }

  enqueue(value) {
    this.tail++;
    this[this.tail] = value;
  }

  dequeue() {
    var hasItems = this.size() > 0;
    if (hasItems) {
      var deletedItem = this[this.head];
      delete this[this.head];
      this.head++;
      return deletedItem;
    }
  }

  size() {
    return this.tail + 1 - this.head;
  }

}
