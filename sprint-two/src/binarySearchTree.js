// Implement a binarySearchTree class with the following properties:
// - .left property, a binary search tree (BST) where all values are lower than the current value.
// - .right property, a BST where all values are higher than the current value.
// - .insert() method, which accepts a value and places it in the tree in the correct position.
// - .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// - .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

var BinarySearchTree = function(value) {
  // using Prototypal instantiation: Object.create
  var newTree = Object.create(BSTMethods);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var BSTMethods = {
  insert(value) {
    var current = this;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = BinarySearchTree(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = BinarySearchTree(value);
          return;
        }
      }
    }
  },

  contains(value) {
    var current = this;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  },

  depthFirstLog(callback) {
    // inner recursive helper
    //  if null -> return;
    //  callback on value
    //  recurse on .left
    //  recurse on .right
    var searchTree = function(node) {
      if (node) {
        callback(node.value);
        searchTree(node.left);
        searchTree(node.right);
      }
    };
    searchTree(this);
  }
};

// BSTNode class (encapsulation?)
// - .value
// - .left - pointer to left child
// - .right - pointer to right child

/*
 * Complexity: What is the time complexity of the above functions?
 */
