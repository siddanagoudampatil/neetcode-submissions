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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;

        const dfs = (root) => {
            if (!root) return [true, 0];
            const left = dfs(root.left);
            const right = dfs(root.right);
            const res = (Math.abs(left[1] - right[1]) <= 1) && left[0] && right[0];
            return [res, Math.max(left[1], right[1]) + 1];
        }

        return dfs(root)[0];
    }
}
