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

        const dfs = (node, height) => {
            if (!node) return;

            if (res.length === height) {
                res.push(node.val);
            }

            dfs(node.right, height + 1);
            dfs(node.left, height + 1);
        }

        dfs(root, 0);

        return res;
    }
}
