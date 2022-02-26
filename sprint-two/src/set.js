var Set = function() {
  var set = Object.create(setPrototype);

  // Idea: use a plain JS Object for _storage
  // We can use it differently than usual though
  // Use the `key` as the set item, and its value can by anything
  // i.e. { setItem1: true, setItem2: true } would mean that our set contains
  // the values `setItem1` and `setItem2`
  // if we track the insertion order: set value to incrementing index

  set._storage = {};

  return set;
};

var setPrototype = {};

/**
 * Takes any string and adds it to the set
 * @param {String} item - string to add to the set
 */
setPrototype.add = function(item) {
  this._storage[item] = true;
};

/**
 * Takes any string and returns a boolean reflecting whether it can be found in the set
 * @param {String} item - string to search for in the set
 * @returns {Boolean} `true` if `item` is contained in the set
 */
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

/**
 * Takes any string and removes it from the set, if present
 * @param {String} item - string to remove from the set
 */
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add:
// O(1)

// contains
// O(1)

// remove
// O(1)