var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);

  storage.head = 0;
  storage.tail = -1;

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this.tail++;
    this[this.tail] = value;
  },

  dequeue: function() {
    var hasItems = (this.tail + 1 - this.head) > 0;
    if (hasItems) {
      var deletedItem = this[this.head];
      delete this[this.head];
      this.head++;
      return deletedItem;
    }
  },
  size: function() {
    return this.tail + 1 - this.head;
  }
};


