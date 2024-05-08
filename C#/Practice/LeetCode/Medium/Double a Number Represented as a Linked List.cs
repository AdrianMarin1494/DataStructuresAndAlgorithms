// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/?envType=daily-question&envId=2024-05-07

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode DoubleIt(ListNode head) {
        return head.val * 2 >= 10
            ? new ListNode(1, DoubleIt2(head))
            : DoubleIt2(head);
    }

    ListNode DoubleIt2(ListNode head)
    {
        if (head == null)
            return null;

        if (head.next != null && head.next.val * 2 >= 10)
            head.val = head.val * 2 % 10 + 1;
        else
            head.val = head.val * 2 % 10;

        head.next = DoubleIt2(head.next);

        return head;
    }
}