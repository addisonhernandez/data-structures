var LinkedList = function() {
  var list = {};

  /** @var Node */
  list.head = null;

  /** @var Node */
  list.tail = null;

  /**
   * Takes a value and adds it to the end of the list
   * @param {*} value - The item to be added to the end of the list
   */
  list.addToTail = function(value) {
    //  H         T
    // [ ]->[ ]->[ ]->null

    //  H         T    N        (N is for new node)
    // [ ]->[ ]->[ ]->[ ]->null

    //  H              T/N
    // [ ]->[ ]->[ ]->[ ]->null


    // make a new node
    //  store `value` in the new node
    const newNode = Node(value);

    // Edge case: what if the list is empty
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      // update tail.next to point to our new node
      list.tail.next = newNode;

      // make the new node the tail of the list
      list.tail = newNode;
    }
  };

  /**
   * Removes the first node in the list and returns its value
   * @returns The value of the removed node
   */
  list.removeHead = function() {
    // Edge case: what if the list is empty
    // - what do we return? -> null
    if (list.head === null) {
      return null;
    }

    // list.head (Node)
    // - value
    // - next -> (Node)

    var deletedValue = list.head.value;

    if (list.head.next) {
      list.head = list.head.next;
    } else {
      // Edge case: what if there's only one element?
      //  T     H
      // [ ]-> null
      list.head = null;
      list.tail = null;
    }

    return deletedValue;
  };

  /**
   *
   * @param {*} target
   * @returns {Boolean} returns boolean reflecting whether or not the passed-in value is in the linked list
   */
  list.contains = function(target) {
    // use `arguments` to see if a node has already been passed in
    // if not ~> current node := head

    // if target === current node.value => return true

    // if current node has a next:

    //  recursively call: contains(target, current Node.next)
    // if current node does not have next:
    //  return false;

    var currentNode = list.head;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addToTail:
// O(1)

// removeHead:
// O(1)

// contains:
// O(n) for a list of `n` nodes