var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(!this.head){
        this.head = newNode;
      }
    if(this.tail){
      this.tail.next = newNode;
      }
    this.tail = newNode;
  };

  list.removeHead = function(){
    var temp = this.head;
    this.head = temp.next;
    return temp.value;
  };

  list.contains = function(target){
    var currentNode = this.head;
    while(currentNode){
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: CONSTANT? O(n)
 */
