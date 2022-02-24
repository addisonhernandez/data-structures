// Do:
//  - Work within the src/functional-shared/ folder
//  - Create an object that holds the methods that will be shared by all instances of the class
//  - Use the keyword `this` in your methods
//  - Use _.extend  to copy the methods onto the instance
// Don't:
//  - Use the keyword new or prototype chains

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create storage object
  var storage = {
    top: -1
  };
  _.extend(storage, stackMethods);
  // return object
  return storage;
};

var stackMethods = {
  // push
  push: function(value) {
    this.top++;
    this[this.top] = value;
  },

  // pop
  pop: function() {
    if (this.size() > 0) {
      var deletedValue = this[this.top];
      delete this[this.top];
      this.top--;
      return deletedValue;
    }
  },

  // size
  size: function() {
    return this.top + 1;
  }
};

// create an instance of Stack

// extend : stackMethods ~> stack instance
