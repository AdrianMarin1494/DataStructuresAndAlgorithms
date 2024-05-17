# https://leetcode.com/problems/delete-leaves-with-a-given-value/description/?envType=daily-question&envId=2024-05-17

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:        
        stack = []
        node = root
        prev_node = None

        while stack or node:
            while node:
                stack.append(node)
                node = node.left

            node = stack[-1]

            if node.right and node.right is not prev_node:
                node = node.right
                continue

            stack.pop()
            
            if not node.right and not node.left and node.val == target:
                if not stack:
                    return None
        
                parent = stack[-1] if stack else None
                if parent and parent.left is node:
                    parent.left = None
                else: #elif parent and parent.right is node:
                    parent.right = None

            prev_node = node
            node = None

        return root