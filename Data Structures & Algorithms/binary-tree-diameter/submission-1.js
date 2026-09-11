/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxHeight(root) {
        if (!root) return 0;
        return 1 + Math.max(this.maxHeight(root.left), this.maxHeight(root.right));
    }

    diameterOfBinaryTree(root) {
        if (!root) return 0;

        const leftHeight = this.maxHeight(root.left);
        const rightHeight = this.maxHeight(root.right);
        const currDiameter = leftHeight + rightHeight;
        const subDiameter = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right));
        return Math.max(currDiameter, subDiameter);
    }
}
