// Linked List is a data structure that contains a head, tail and length property
// Linked Lists consists of nodes and each node has a value and a pointer to another node or null

// Each element is a node, a node stores data and refference the next node, if it is at the end it doesen t refference any node


// Search
// it goes on each node from the head to the searched item

// Insert
// we start at the beginning, to each node, until we find the correct spot and insert the item
// insert at the beginning is making the item the new head

// Comparison with Arrays


// A linked list is a collection of nodes
// A node stores a piece of data  - val
// A reference to the next node - next

// Pop
// keep track of the last item before the tail (pre - new tail)
// remove the tail
// make the pre (last item before the tail) the new tail

// Hello ---> Goodbye ---> !
// current
// new tail
// move the current by one
// Hello ---> Goodbye ---> !
//            current
// new tail
// We check if is this the end of the list and is not
// we move the new tail
// Hello ---> Goodbye ---> !
//            current
//            new tail
// We move the current again and check if is this the tail
// Hello ---> Goodbye ---> !
//                         current
//            new tail
// it is the current tail so we pop it, we found the new tail and we make it the tail
// Hello ---> Goodbye    !
//                     current
//            new tail

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SlinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        // if the list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    // traverse() {
    //     var current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    pop () {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SlinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
console.log(list.pop());

