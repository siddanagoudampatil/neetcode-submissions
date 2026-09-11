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
        let pFound = false;
        let qFound = false;

        const dfs = (root) => {
            console.log(root?.val);
            if (!root) {
                return null;
            }

            const left = dfs(root.left);
            const right = dfs(root.right);

            if (root.val === p.val) {
                pFound = true;
                return root;
            }

            if (root.val === q.val) {
                qFound = true;
                return root;
            }

            if (left && right) {
                return root;
            }

            return left || right;
        };

        const res = dfs(root);

        if (pFound && qFound) {
            return res;
        }

        return null;
    }
}
