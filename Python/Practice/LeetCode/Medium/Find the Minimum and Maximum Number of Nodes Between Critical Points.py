# https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/?envType=daily-question&envId=2024-07-05

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        prev = head
        head = head.next
        critical_pos = []
        curr = 1
        mindis = sys.maxsize

        if(head.next==None):
            return [-1, -1]

        while(head.next!=None):
            nextel = head.next
            if(prev.val<head.val and nextel.val<head.val):
                critical_pos.append(curr)
            elif(prev.val>head.val and nextel.val>head.val):
                critical_pos.append(curr)

            if(len(critical_pos)>1):
                mindis = min(mindis, critical_pos[-1]-critical_pos[-2])
            curr+=1
            prev = head
            head = head.next

        if(len(critical_pos)<=1):
            return [-1, -1]

        answer = [mindis, critical_pos[-1]-critical_pos[0]]

        return answer