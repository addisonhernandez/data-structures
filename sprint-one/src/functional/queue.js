var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    // headIndex: tracks index of front of stack
    //  init: -1 (empty queue)
    head: 0,

    // tailIndex: tracks index of end of queue
    //  init: -1 (empty queue)
    tail: -1

    // stack item properties of the form:
    // {Number} Index : {String} Value
  };

  // Implement the methods below

  /**
   * Add a string to the back of the queue
   * @param {String} value
   */
  someInstance.enqueue = function(value) {
    // I: head := -1 && tail := -1

    // increment tail
    // head?

    // assign `value` ~> index `tail`
    storage.tail += 1;
    storage[storage.tail] = value;
  };

  /**
   * Remove the string at the front of the queue
   * @returns {String} - The string at the front of the queue
   */
  someInstance.dequeue = function() {
    var isEmpty = (storage.tail + 1 - storage.head === 0);
    // if the queue is not empty
    if (!isEmpty) {
      // save element at head to variable
      var deletedItem = storage[storage.head];
      // delete property at head
      delete storage[storage.head];
      // increment head
      storage.head++;
      // return saved element
      return deletedItem;
    }
  };

  /**
   * Get the number of items in the queue
   * @returns {Number} - The number of items in the queue
   */
  someInstance.size = function() {
    return storage.tail + 1 - storage.head;
  };

  return someInstance;
};
