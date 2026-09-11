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

        if (
            !this.isSubtreeValid(root.left, root.val, "left") ||
            !this.isSubtreeValid(root.right, root.val, "right")
        ) {
            return false;
        }

        return this.isValidBST(root.left) && this.isValidBST(root.right);
    }

    isSubtreeValid(root, val, type) {
        if (!root) {
            return true;
        }

        if (type === "left") {
            if (root.val >= val) {
                return false;
            }
        } else {
            if (root.val <= val) {
                return false;
            }
        }

        return (
            this.isSubtreeValid(root.left, val, type) && this.isSubtreeValid(root.right, val, type)
        );
    }
}
