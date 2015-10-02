var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.counter = 0;
  instance.storage = {};

  //enqueue, dequeue, size
return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function (){
    if (this.counter === 0){
      return;
    }
    var holder = this.storage[0];
    for(var i = 0; i < this.counter; i++){
      this.storage[i] = this.storage[i+1];
    }
    this.counter--;
    return holder;
  },
  size: function() {
    return this.counter;
  }
};


