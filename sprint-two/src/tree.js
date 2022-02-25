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
  // make a new `Tree`
  var child = Tree(value);
  // push the newTree to the children prop
  this.children.push(child);
};

/**
 * Takes any input and returns whether it can be found as the value of the target node or any descendant node
 * @param {*} target - value to search for in the current tree
 * @returns {Boolean} `true` if the tree contains `target`, `false` otherwise
 */
treeMethods.contains = function(target) {
  // inner recursive search
  var searchChild = function (childTree) {
    //  if value == target -> true
    if (childTree.value === target) {
      return true;
    }
    //  if value != target ->
    //      _.each: recursively search each child
    return _.some(childTree.children, function(child) {
      return searchChild(child);
    });
  };

  return searchChild(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild:
// O(1)

// contains:
// O(n)