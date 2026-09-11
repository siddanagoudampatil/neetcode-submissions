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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const dfs = (root, lvl) => {
            if (!root) {
                return;
            }

            if (res.length === lvl) {
                res.push(root.val);
            }
            dfs(root.right, lvl + 1);
            dfs(root.left, lvl + 1);
        }
        dfs(root, 0);
        return res;
    }
}
