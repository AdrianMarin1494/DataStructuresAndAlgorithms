// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    // 1. measure length
    let on = head;
    let length = 1;
    while (on) {
        length++;
        on = on.next;
    }
    let leftIndex = length - n - 1;
    // 1.5 (edge case) delete head
    if (leftIndex === 0) {
        return head.next;
    }
    // 2. point around to delete node
    on = head;
    while (leftIndex > 1) {
        on = on.next;
        leftIndex--;
    }
    on.next = on.next.next;
    return head;
}