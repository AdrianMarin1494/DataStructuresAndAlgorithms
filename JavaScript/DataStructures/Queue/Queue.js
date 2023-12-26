// WHAT IS A QUEUE?
// A FIFO data structure!
// First In First Out
// Queues exist everywhere! Think about the last time you waited in line....
// How do we use them in programming?
// Background tasks
// Uploading resources
// Printing / Task processing

//   A series of nodes
//       size = 4
// first           last
// [ 10 -> 2 -> 22 -> 7]

// Queues are a FIFO data structure, all elements are first in first out.
// Queues are useful for processing tasks and are foundational for more complex data structures
// Insertion and Removal can be done in O(1)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}