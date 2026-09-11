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
        if (!root) {
            return true;
        }

        if (!this.isLeftValid(root.left, root.val) || !this.isRightValid(root.right, root.val)) {
            return false;
        }

        return this.isValidBST(root.left) && this.isValidBST(root.right);
    }

    isLeftValid(node, max) {
        if (!node) {
            return true;
        }

        if (node.val >= max) {
            return false;
        }

        return this.isLeftValid(node.left, max) && this.isLeftValid(node.right, max);
    }

    isRightValid(node, min) {
        if (!node) {
            return true;
        }

        if (node.val <= min) {
            return false;
        }

        return this.isRightValid(node.left, min) && this.isRightValid(node.right, min);
    }
}
