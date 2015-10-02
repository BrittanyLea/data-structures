

var Graph = function(){
  this.newGraph = {};

};

Graph.prototype.addNode = function(node){
  this.newGraph[node] = [];
};

Graph.prototype.contains = function(node){
  return this.newGraph.hasOwnProperty(node)
};

Graph.prototype.removeNode = function(node){
  delete this.newGraph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.newGraph[fromNode].indexOf(toNode) > -1) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.newGraph[fromNode] = _.filter(this.newGraph[fromNode], function (node){
    return node !== toNode;
  });
  this.newGraph[toNode] = _.filter(this.newGraph[toNode], function(node){
    return node !== fromNode;
  });
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.newGraph, function (value, key, list){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



