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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pIdx = 0;
        let iIdx = 0;

        const dfs = (limit) => {
            if (pIdx >= preorder.length) {
                return null;
            }

            if (inorder[iIdx] === limit) {
                iIdx++;
                return null;
            }

            const root = new TreeNode(preorder[pIdx++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);
            return root;
        }

        return dfs(Infinity);
    }
}
