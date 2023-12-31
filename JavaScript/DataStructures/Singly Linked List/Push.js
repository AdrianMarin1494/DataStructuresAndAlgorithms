// Push
// Pushing pseudocode
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return teh linked list

// push(val) {
//     var newNode = new Node(val);
//     // if the list is empty
//     if (!this.head) {
//         this.head = newNode;
//         this.tail = this.head;
//     } else {
//         this.tail.next = newNode;
//         this.tail = newNode;
//     }
//     this.length++;
//     return this;
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("Welcome");