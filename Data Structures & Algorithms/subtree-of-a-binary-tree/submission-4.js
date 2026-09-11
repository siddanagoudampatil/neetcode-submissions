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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const seralize = (node) => {
            if (!node) return "$#";
            return `$${node.val}` + seralize(node.left) + seralize(node.right);
        }

        const rootString = seralize(root);
        const subRootString = seralize(subRoot);

        return rootString.includes(subRootString);
    }
}
