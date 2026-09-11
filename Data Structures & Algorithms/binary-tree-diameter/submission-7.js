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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (root) => {
            if (!root) return 0;
            const leftDepth = dfs(root.left);
            const rightDepth = dfs(root.right);
            diameter = Math.max(diameter, leftDepth + rightDepth);
            return Math.max(leftDepth, rightDepth) + 1;
        }
        dfs(root);

        return diameter;
    }
}
