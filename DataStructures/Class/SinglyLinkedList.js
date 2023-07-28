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

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);