var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};





var treeMethods = {};
//push child onto tree
treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};
//recurse through the children/trees using the contains method
//loop through the children
//recursion and tree traversal are similar
treeMethods.contains = function(target){
  var found = false
  if(this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].value === target) {
      found = true;
      return found;
    }
   found = this.children[i].contains(target);
   if (found === true){
     return found;
   }
 }
 return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
