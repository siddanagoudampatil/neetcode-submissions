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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        let d = -Infinity;
        const queue = [[root, 1]];

        while (queue.length) {
            const [node, depth] = queue.shift();
            d = Math.max(d, depth);
            if (node.left) queue.push([node.left, depth + 1]);
            if (node.right) queue.push([node.right, depth + 1]);
        }

        return d;
    }
}
