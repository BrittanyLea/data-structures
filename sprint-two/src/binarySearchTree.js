var BinarySearchTree = function(value){
  var treeNode = Object.create(methods);
  treeNode.value = value
  treeNode.left = null;
  treeNode.right = null;
  return treeNode;
};

var methods = {
  "insert": function(value){
    var newNode = BinarySearchTree(value);
    if ((this.value < value) && (this.right === null)){
      this.right = newNode;
    }
    if ((this.value > value) && (this.left === null)){
      this.left = newNode;
    }
    if (this.value > value && this.left !== null){
      this.left.insert(value);
    }
    if (this.value < value && this.right !== null){
      this.right.insert(value);
    }

  },
  "contains": function(value){
    if(this.value === value){
      return true;
    }
    if(this.value > value && this.left === null) {
      return false;
    }
    if(this.value < value && this.right === null) {
      return false;
    }
    if (this.value > value && this.left !== null){
      return this.left.contains(value);
    }
    if (this.value < value && this.right !== null){
      return this.right.contains(value);
    }
  },
  "depthFirstLog": function(cheeseburger){
   var runCB = function(value){
     cheeseburger(value)
   };
   if(this.value){
     runCB(this.value);
   }
   if(this.left){
     this.left.depthFirstLog(cheeseburger);
   }
   if(this.right){
     this.right.depthFirstLog(cheeseburger);
   }
   return;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
