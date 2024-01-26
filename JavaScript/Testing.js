/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let currentVal = head;

    while (currentVal.next) {
        let nextVal = currentVal.next;
        let insertVal = new ListNode(getTheGreatestDivisor(currentVal.val, nextVal.val));
        console.log("insertVal: ", insertVal)
        console.log("currentVal: ", currentVal.val)
        console.log("nextVal: ", nextVal.val)
        currentVal.next = insertVal;
        insertVal.next = nextVal;

        currentVal = nextVal;
    }

    return head;
};

function getTheGreatestDivisor(firstNumber, secondNumber) {
    let smallerNumber = firstNumber <= secondNumber ? firstNumber : secondNumber;

    while (smallerNumber >= 1) {
        if (firstNumber % smallerNumber === 0 && secondNumber % smallerNumber === 0) {
            return smallerNumber;
        }
        smallerNumber--;
    }
}