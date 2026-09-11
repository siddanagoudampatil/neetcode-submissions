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
    maxDepth(root) {
        const dfs = (root) => {
            if (!root) return 0;
            return Math.max(dfs(root.left), dfs(root.right)) + 1;
        }

        return dfs(root);
    }
}
