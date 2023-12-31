// Adding to the beginning of the Queue!
// Remember, queues are a FIFO data structure

// Enqueue Pseudocode
// This function accepts some value
// Create a new node using that value passed to the function
// If there are no nodes in the queue, set this node to be the first and last property of the queue
// Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
// Increment the size of the queue by 1

// enqueue(val){
//     var newNode = new Node(val);
//     if(!this.first){
//         this.first = newNode;
//         this.last = newNode;
//     } else {
//         this.last.next = newNode;
//         this.last = newNode;
//     }
//     return ++this.size;
// }

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
}