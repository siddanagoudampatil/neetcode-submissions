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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        const res = [];

        const levelOrder = (curr, level) => {
            if (!res[level]) res[level] = [];

            res[level].push(curr.val);

            if (curr.left) levelOrder(curr.left, level + 1);
            if (curr.right) levelOrder(curr.right, level + 1);
        }

        levelOrder(root, 0);

        return res;
    }
}
