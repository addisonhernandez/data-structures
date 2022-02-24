var Stack = function() {
  // Object.create an instance
  var storage = Object.create(stackMethods);

  // decorate with `top` property
  storage.top = -1;

  // return
  return storage;
};

var stackMethods = {
  push: function (value) {
    this.top++;
    this[this.top] = value;
  },

  pop: function () {
    var hasItems = this.top >= 0;

    if (hasItems) {
      var deletedItem = this[this.top];
      delete this[this.top];
      this.top--;
      return deletedItem;
    }
  },

  size: function () {
    return this.top + 1;
  }
};


