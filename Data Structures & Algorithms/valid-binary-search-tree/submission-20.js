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
        const dfs = (root, min, max) => {
            if (!root) {
                return true;
            }

            if (root.val >= max || root.val <= min) {
                return false;
            }

            return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
        }

        return dfs(root, -Infinity, Infinity);
    }
}
