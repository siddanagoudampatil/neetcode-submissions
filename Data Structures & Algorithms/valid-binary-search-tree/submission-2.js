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

        if (!this.isLeftSubTreeValid(root.left, root.val) || !this.isRightSubTreeValid(root.right, root.val)) return false;

        return this.isValidBST(root.left) && this.isValidBST(root.right);
    }

    isLeftSubTreeValid(root, max) {
        if (!root) return true;

        if (root.val >= max) return false;

        return this.isLeftSubTreeValid(root.left, max) && this.isLeftSubTreeValid(root.right, max);
    }

    isRightSubTreeValid(root, min) {
        if (!root) return true;

        if (root.val <= min) return false;

        return this.isRightSubTreeValid(root.left, min) && this.isRightSubTreeValid(root.right, min);
    }
}
