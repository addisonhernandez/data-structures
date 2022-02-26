

var HashTable = function () {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // edge case: what if _storage[index] is already occupied?
  // should we always store an array?

  var itemsInBucket = this._storage.get(index) || {};

  itemsInBucket[k] = v;

  this._storage.set(index, itemsInBucket);
  this._size++;

  // test load factor (#k / #buckets)
  if (this._size / this._limit > 0.75) {
    this.grow();
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var itemsInBucket = this._storage.get(index);

  if (!itemsInBucket) {
    return undefined;
  }

  return itemsInBucket[k];
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var itemsInBucket = this._storage.get(index);

  delete itemsInBucket[k];
  this._size--;
};

HashTable.prototype.grow = function () {
  // var biggerTable = new HashTable();
  // grow the limit
  this._limit = this._limit * 2;

  // make a new table
  var newStorage = LimitedArray(this._limit);

  // iterate over members of current  table
  //  `insert` members into new table
  var copyMembers = function (val, key) {
    var index = getIndexBelowMaxForKey(key, this._limit);

    var itemsInBucket = newStorage.get(index) || {};

    itemsInBucket[key] = val;

    newStorage.set(index, itemsInBucket);
  };
  this._storage.each(copyMembers);

  this._storage = newStorage;
};



HashTable.prototype.shrink = function () {


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


