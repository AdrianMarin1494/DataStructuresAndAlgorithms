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

// Popping Pseudocode
// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed

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
