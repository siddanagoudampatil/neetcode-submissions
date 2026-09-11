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

        for (let i = 0; i < anscestorP.length; i++) {
            const node1 = anscestorP[i];
            for (let j = 0; j < anscestorQ.length; j++) {
                const node2 = anscestorQ[j];
                if (node1 === node2) {
                    return node1;
                }
            }
        }

        return null;
    }
}
