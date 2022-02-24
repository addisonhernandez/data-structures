// Do:
//  - Work within the src/es6/ folder
//  - Capitalize your function name to indicate to others that it is intended to be run with the keyword new
//  - Use the keyword new when instantiating your class
//  - Use the keyword this in your constructor
//  - Explicitly declare a class method named constructor
//  - Declare all other class methods within the class declaration
// Don't:
//  - Declare the instance explicitly
//  - Return the instance explicitly
//  - Add class methods to the class prototype directly

class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = -1;
  }

  push(value) {
    this[++this.top] = value;
  }

  pop() {
    if (this.size() > 0) {
      var deletedItem = this[this.top];
      delete this[this.top--];
      return deletedItem;
    }
  }

  size() { return this.top + 1; }

}

var myStack = new Stack();