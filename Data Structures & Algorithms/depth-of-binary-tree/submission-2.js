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

        const queue = [root];
        let depth = 0;

        while (queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const curr = queue.shift();
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
            depth++;
        }

        return depth;
    }
}
