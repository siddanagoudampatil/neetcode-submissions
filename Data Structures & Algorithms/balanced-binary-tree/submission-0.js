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

        const lHeight = this.height(root.left);
        const rHeight = this.height(root.right);

        if (Math.abs(lHeight - rHeight) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    height(root) {
        if (!root) return 0;
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
}
