

// Instantiate a new graph
var Graph = function() {
  // create number of vertices property
  //   use size of map obj to determine number of vertices? --not sure about this one
  //   if map obj won't work, could we set to 0 and adjust methods to increment/decrement as needed?
  // create adjacency list property and set equal to new Map object
  //   use adjacency list over matrix bc matrices are confusing
  //   Map obj key --> vertex, value --> array of adjacent node
  this.adjList = new Map();
  this.nOfVertices = this.adjList.size; // TODO: how will we use this?
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // set new adjacentList property
  //   key --> node
  //   value --> empty array
  if (!this.adjList.has(node)) {
    this.adjList.set(node, []);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // get vertices from adjList via this.adjList.keys()?
  // use _.contains to check if vertex is represented in graph?
  return this.adjList.has(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // get adjList (value) for the node (vertex) to be deleted to check for which edges must also be deleted
  // how to remove edges from adjList arrays?
  //  could we complete remove edge method and call it here?
  // delete associated property from map obj
  var neighbors = this.adjList.get(node);

  _.each(neighbors, (neighbor) => {
    // DEBUGGING NOTE:
    // We're having a problem here with the lexical binding of `this`
    // I refactored this callback function using an arrow function,
    // to make it work.
    // Before refactoring, `this` was bound to Window (global)
    //
    // To fix this in ES5:
    // Do we need to use Function.prototype.call/apply?
    //                   Function.prototype.bind?
    this.removeEdge(neighbor, node);
  });

  this.adjList.delete(node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check adjList of fromNode for toNode and adjList of toNode for fromNode
  if (!this.adjList.has(fromNode)) {
    return false;
  }
  return this.adjList.get(fromNode).includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // retrieve adjList for fromNode and push toNode into list to represent edge from fromNode to toNode
  // retrieve adjList for toNode and push fromNode into list to represent edge from toNode to fromNode
  if (!this.hasEdge(fromNode, toNode)) {
    this.adjList.get(fromNode).push(toNode);
    this.adjList.get(toNode).push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.adjList.has(fromNode) || !this.adjList.has(toNode)) {
    return;
  }

  var newNeighbors;

  // remove edge from -> to
  newNeighbors = _.reject(this.adjList.get(fromNode), function (neighbor) {
    return neighbor === toNode;
  });
  this.adjList.set(fromNode, newNeighbors);

  // remove edge to -> from
  newNeighbors = _.reject(this.adjList.get(toNode), function (neighbor) {
    return neighbor === fromNode;
  });
  this.adjList.set(toNode, newNeighbors);
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // get all vertices from adjList
  // iterate over vertices and call cb on each

  // _.invoke? it's not working though :(
  // I'll dig into the API: https://underscorejs.org/#invoke

  // _.invoke(this.adjList.keys(), cb);

  this.adjList.forEach(function (neighbors, vertex) {
    cb(vertex);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode:

// contains:

// removeNode:

// hasEdge:

// addEdge:

// removeEdge:

// forEachNode: