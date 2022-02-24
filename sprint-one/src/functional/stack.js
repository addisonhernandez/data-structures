var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    // topIndex: tracks index of top of stack
    //  init: -1 (empty stack)
    top: -1
    // stack item properties of the form:
    // {Number} Index : {String} Value
  };

  // Implement the methods below

  /**
   * Add a string to the top of the stack
   * @param {String} value
   */
  someInstance.push = function(value) {
    // EX: storage.top := -1

    // increment storage.top
    // assign value ~> storage[top]

    // storage := { 0: `value`, top: 0 }

    // End: storage.top := 0

    storage.top += 1;
    storage[storage.top] = value;
  };

  /**
   * Remove the string on the top of the stack
   * @returns {String} - The string on the top of the stack
   */
  someInstance.pop = function() {
    // if top >= 0
    if (storage.top >= 0) {
      // get value from top
      var deletedValue = storage[storage.top];
      // delete property at storage[top]
      delete storage[storage.top];
      // update top
      storage.top -= 1;
      // return deleted value
      return deletedValue;
    }
  };

  /**
   * Get the number of items on the stack
   * @returns {Number} - The number of items on the stack
   */
  someInstance.size = function() {
    return storage.top + 1;
  };

  return someInstance;
};
