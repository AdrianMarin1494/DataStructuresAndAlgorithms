// https://leetcode.com/problems/middle-of-the-linked-list/?envType=daily-question&envId=2024-03-07

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
var middleNode = function(head) {
    let counter = 0;
    let current = head;
    let middleValue = head;
    while (current) {
        current = current.next;
        counter++;
    }
    for (let i = 0; i < Math.floor(counter / 2); i++) {
        middleValue = middleValue.next;
    }

    return middleValue;
};