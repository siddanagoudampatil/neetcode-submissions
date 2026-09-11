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
        return this.dfs(root)[0];
    }

    dfs(root) {
        if (!root) return [true, 0];

        const [lBalanced, lHeight] = this.dfs(root.left);
        const [rBalanced, rHeight] = this.dfs(root.right);

        const balanced = lBalanced && rBalanced && (Math.abs(lHeight - rHeight) <= 1);
        const height = 1 + Math.max(lHeight, rHeight);
        return [balanced, height];
    }
}
