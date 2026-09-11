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
    isValidBST(root) {
        if (!root) return true;

        if (!this.isLeftTreeValid(root.left, root.val) || !this.isRightTreeValid(root.right, root.val)) {
            return false;
        }

        return this.isValidBST(root.left) && this.isValidBST(root.right);

    }

    isLeftTreeValid(root, max) {
        if (!root) return true;

        if (root.val >= max) return false;

        return this.isLeftTreeValid(root.left, max) && this.isLeftTreeValid(root.right, max);
    }

    isRightTreeValid(root, min) {
        if (!root) return true;

        if (root.val <= min) return false;

        return this.isRightTreeValid(root.left, min) && this.isRightTreeValid(root.right, min);
    }
}
