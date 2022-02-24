// Do:
//  - Work within the src/functional-shared/ folder
//  - Create an object that holds the methods that will be shared by all instances of the class
//  - Use the keyword `this` in your methods
//  - Use _.extend  to copy the methods onto the instance
// Don't:
//  - Use the keyword new or prototype chains

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    head: 0,
    tail: -1
  };

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {

  enqueue: function (value) {
    this.tail++;
    this[this.tail] = value;
  },

  dequeue: function () {
    if (this.size() > 0) {
      var deletedItem = this[this.head];
      delete this[this.head];
      this.head++;
      return deletedItem;
    }
  },

  size: function () {
    return this.tail + 1 - this.head;
  }

};


