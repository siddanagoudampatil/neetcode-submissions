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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (p.val > q.val) {
            [p, q] = [q, p];
        }
        
        const dfs = (node) => {
            if (!node) {
                return null;
            }

            if (p.val <= node.val && q.val >= node.val) {
                return node;
            }

            if (p.val < node.val && q.val < node.val) {
                return dfs(node.left);
            }

            return dfs(node.right);
        }

        return dfs(root);
    }
}
