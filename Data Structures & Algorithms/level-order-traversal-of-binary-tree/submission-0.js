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
        const queue = [root, null];

        let res = [];
        let level = [];
        while (queue.length) {
            const curr = queue.shift();
            if (curr) {
                level.push(curr.val);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            } else {
                res.push(level);
                level = [];
                if (queue[0]) queue.push(null);
            }
        }

        return res;
    }
}
