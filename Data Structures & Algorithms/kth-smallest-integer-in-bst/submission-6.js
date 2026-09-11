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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = -1;
        const dfs = (node) => {
            if (!node || k === 0) {
                return;
            }

            dfs(node.left);
            k--;

            if (k === 0) {
                res = node.val;
                return;
            }

            dfs(node.right);
        }

        dfs(root);

        return res;
    }
}
