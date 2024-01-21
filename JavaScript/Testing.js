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
        const newNode = new Node(val);

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

    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
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

    traverse() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        let newNode = new node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
}

const singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push("First");
// singlyLinkedList.push("Second");
// singlyLinkedList.push("Third");
// console.log(singlyLinkedList);

// singlyLinkedList.pop();
// console.log(singlyLinkedList);

// singlyLinkedList.traverse();

// singlyLinkedList.shift();
// console.log(singlyLinkedList);

singlyLinkedList.unshift("Second");
singlyLinkedList.unshift("First");
console.log(singlyLinkedList);
