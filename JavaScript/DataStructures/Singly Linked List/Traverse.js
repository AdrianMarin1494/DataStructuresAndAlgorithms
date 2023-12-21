// traverse() {
//     var current = this.head;
//     while (current) {
//         console.log(current.val);
//         current = current.next;
//     }
// }

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
    
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

var list = new SlinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
console.log(list.head.next.next);
list.traverse();