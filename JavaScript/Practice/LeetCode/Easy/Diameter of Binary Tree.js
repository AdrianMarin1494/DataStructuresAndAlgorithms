// https://leetcode.com/problems/diameter-of-binary-tree/description/?envType=daily-question&envId=2024-02-27

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    class DiameterData {
        constructor(diameter, height) {
            this.diameter = diameter;
            this.height = height;
        }
    }

    function calculateDiameterAndHeight(root) {
        if (!root) {
            return new DiameterData(0, 0);
        }

        const leftData = calculateDiameterAndHeight(root.left);
        const rightData = calculateDiameterAndHeight(root.right);

        const currentDiameter = Math.max(leftData.height + rightData.height,
                                          Math.max(leftData.diameter, rightData.diameter));
        const currentHeight = Math.max(leftData.height, rightData.height) + 1;

        return new DiameterData(currentDiameter, currentHeight);
    }

    const data = calculateDiameterAndHeight(root);
    return data.diameter;
};