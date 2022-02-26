var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

/**
 * Adds a new value as a subtree
 * @param {*} value Value to store in the new sub-tree
 */
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

/**
 * Takes any input and returns whether it can be found as the value of the target node or any descendant node
 * @param {*} target - value to search for in the current tree
 * @returns {Boolean} `true` if the tree contains `target`, `false` otherwise
 */
treeMethods.contains = function(target) {
  var searchChild = function (childTree) {
    if (childTree.value === target) {
      return true;
    }

    return _.some(childTree.children, function(child) {
      return searchChild(child);
    });
  };

  return searchChild(this);
};

treeMethods.findMax = function() {
  var maxVal = -Infinity;

  var findMaxOfChildren = function(tree) {
    if (tree.value > maxVal) {
      maxVal = tree.value;
    }

    _.each(tree.children, child => findMaxOfChildren(child));
  };

  findMaxOfChildren(this);

  return maxVal;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild:
// O(1)

// contains:
// O(n)