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
        const map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        const dfs = (l, r) => {
            if (l > r) {
                return null;
            }

            const rootVal = preorder[pIdx++];
            const root = new TreeNode(rootVal);
            const mid = map.get(rootVal);
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);

            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
