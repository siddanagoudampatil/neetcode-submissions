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
    maxPathSum(root) {
        let res = -Infinity;

        function getMax(root) {
            if (!root) return 0;
            const leftMax = getMax(root.left);
            const rightMax = getMax(root.right);
            const max = root.val + Math.max(leftMax, rightMax);
            return Math.max(0, max);
        }

        function dfs(root) {
            if (!root) return null;
            const leftMax = getMax(root.left);
            const rightMax = getMax(root.right);
            res = Math.max(res, root.val + leftMax + rightMax);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return res;
    }
}
