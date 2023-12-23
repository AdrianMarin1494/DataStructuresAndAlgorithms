// Add a pointer to the previous node and the next node. 
// Almost the same with singly linked list, except every node has another pointer, to the previous node.
// More memory === More Flexibility 
// It's almost always a tradeoff!

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let first = new Node(1);
first.next = new Node(2);
first.next.prev = first;
console.log(first);
console.log(first.second);

// Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
// Better than Singly Linked Lists for finding nodes and can be done in half the time!
// However, they do take up more memory considering the extra pointer
// Doubly linked lists are used to implement other data structures and certain types of caches