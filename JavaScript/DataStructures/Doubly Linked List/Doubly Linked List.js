// Add a pointer to the previous node and the next node. 
// Almost the same with singly linked list, except every node has another pointer, to the previous node.

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