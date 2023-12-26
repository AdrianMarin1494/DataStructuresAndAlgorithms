// https://leetcode.com/problems/min-stack/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /** 
     * @param {number} val
     * @return {void}
     */
    push = function (val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else if (this.minStack.length === 1) {
            if (val >= this.minStack[0]) {
                this.minStack.push(val)
            } else {
                this.minStack.unshift(val)
            }
        } else if (this.minStack.length > 1) {
            let minStackDimension = this.minStack.length
            for (let i = 0; i < minStackDimension; i++) {
                if (this.minStack[i] >= val) {
                    this.minStack.splice(i, 0, val);
                    break;
                }
            }
            if (this.minStack[minStackDimension - 1] < val) {
                this.minStack.push(val);
            }
        }
        return this.minStack
    };

    /**
     * @return {void}
     */
    pop = function () {
        const removedItem = this.stack.pop();
        const removedItemIndex = this.minStack.indexOf(removedItem);
        this.minStack.splice(removedItemIndex, 1)
    };

    /**
    * @return {number}
    */
    top = function () {
        return this.stack[this.stack.length - 1];
    };

    /**
    * @return {number}
    */
    getMin = function () {
        return this.minStack[0];
    };
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */