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
        const anscestorP = [];
        const anscestorQ = [];

        const dfs = (root, val, arr) => {
            if (!root) {
                return false;
            }

            if (root.val === val.val) {
                arr.push(root)
                return true;
            }

            const inLeftTree = dfs(root.left, val, arr);
            if (inLeftTree) {
                arr.push(root);
                return true;
            }

            const inRightTree = dfs(root.right, val, arr);
            if (inRightTree) {
                arr.push(root);
                return true;
            }
        }

        dfs(root, p, anscestorP);
        dfs(root, q, anscestorQ);

        const set = new Set(anscestorP.map(node => node.val));
        for (const node of anscestorQ) {
            if (set.has(node.val)) {
                return node;
            }
        }

        return null;
    }
}
