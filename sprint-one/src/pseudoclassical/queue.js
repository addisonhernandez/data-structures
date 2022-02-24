// Do:
//  - Work within the src/pseudoclassical/ folder
//  - Capitalize your function name to indicate to others that it is intended to be run with the keyword new
//  - Use the keyword new when instantiating your class
//  - Use the keyword this in your constructor
// Don't:
//  - Declare the instance explicitly
//  - Return the instance explicitly

var Queue = function() {
  this.head = 0;
  this.tail = -1;
};

Queue.prototype.enqueue = function (value) {
  this.tail++;
  this[this.tail] = value;
};

Queue.prototype.dequeue = function () {
  var hasItems = this.size() > 0;

  if (hasItems) {
    var deletedItem = this[this.head];
    delete this[this.head];
    this.head++;
    return deletedItem;
  }
};

Queue.prototype.size = function () {
  return this.tail - this.head + 1;
};

var myQueue = new Queue();
