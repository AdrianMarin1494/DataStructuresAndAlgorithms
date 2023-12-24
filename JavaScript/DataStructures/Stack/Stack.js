// A LIFO data structure!
// The last element added to the stack will be the first element removed from the stack

// HOW IS IT USED?
// Think about a stack of plates, or a stack of markers, or a stack of....anything.
// As you pile it up the last thing (or the topmost thing) is what gets removed first.

// WHERE STACKS ARE USED
// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack!

//   A series of nodes
//       size = 4
// last            first
// [ 10 <- 2 <- 22 <- 7]

//   A series of nodes
//       size = 4
// first           last
// [ 10 -> 2 -> 22 -> 7]

// Stacks are a LIFO data structure where the last value in is always the first one out.
// Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
// They are not a built in data structure in JavaScript, but are relatively simple to implement
// Insert and remove are both O(1)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}