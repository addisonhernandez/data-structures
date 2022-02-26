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
    const newNode = Node(value);

    // Edge case: the list is empty
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  /**
   * Removes the first node in the list and returns its value
   * @returns The value of the removed node
   */
  list.removeHead = function() {
    // Edge case: the list is empty
    if (list.head === null) {
      return null;
    }

    var deletedValue = list.head.value;

    if (list.head.next) {
      list.head = list.head.next;
    } else {
      // there is no next node -> retore initial state
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