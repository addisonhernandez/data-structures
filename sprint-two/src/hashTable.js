

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
var ht = new HashTable();
console.log(ht);

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // edge case: what if _storage[index] is already occupied?
  // should we always store an array?

  var itemsInBucket = this._storage.get(index) || {};

  itemsInBucket[k] = v;

  this._storage.set(index, itemsInBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var itemsInBucket = this._storage.get(index);

  if (!itemsInBucket) {
    return undefined;
  }

  return itemsInBucket[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var itemsInBucket = this._storage.get(index);

  delete itemsInBucket[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


