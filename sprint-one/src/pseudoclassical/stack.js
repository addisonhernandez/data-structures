// Do:
//  - Work within the src/pseudoclassical/ folder
//  - Capitalize your function name to indicate to others that it is intended to be run with the keyword new
//  - Use the keyword new when instantiating your class
//  - Use the keyword this in your constructor
// Don't:
//  - Declare the instance explicitly
//  - Return the instance explicitly

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = -1;
};

// Add methods to Stack.prototype
Stack.prototype.push = function(value) {
  this.top++;
  this[this.top] = value;
};

Stack.prototype.pop = function() {
  var hasItems = this.size() > 0;
  if (hasItems) {
    var deletedItem = this[this.top];
    delete this[this.top];
    this.top--;
    return deletedItem;
  }
};

Stack.prototype.size = function() {
  return this.top + 1;
};

var myStack = new Stack();