// Remove a value from the top of the stack!

// POP PSEUDOCODE
// If there are no nodes in the stack, return null
// Create a temporary variable to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the node removed

// pop(){
//     if(!this.first) return null;
//     var temp = this.first;
//     if(this.first === this.last){
//         this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}