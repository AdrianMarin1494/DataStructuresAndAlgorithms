// WHAT IS A BINARY HEAP?
// Very similar to a binary search tree, but with some different rules!
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

// MAX BINARY HEAP
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Why do we need to know this?
// Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
// They are also used quite a bit, with graph traversal algorithms

// THERE'S AN EASY WAY OF STORING A BINARY HEAP...
// A LIST/ARRAY

// REPRESENTING A HEAP

// Parent

//         L Child

//              R Child

// 0      1     2      3     4      5     6      7     8      9    10    11   12   13   14

//         Parent

//                     L Child

//                           R Child

// 0      1     2      3     4      5     6      7     8      9    10    11   12   13   14

// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2

// WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
// For any child node at index  n...
// Its parent is at index (n-1)/2 (floored)

// DEFINING OUR CLASS
// Class Name:
//        MaxBinaryHeap
// Properties:
//        values = []

// Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
// Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
// With just a little bit of math, we can represent heaps using arrays!

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);