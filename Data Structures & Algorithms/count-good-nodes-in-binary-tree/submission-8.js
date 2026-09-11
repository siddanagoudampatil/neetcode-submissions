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
    goodNodes(root) {
        if (!root) return 0;

        let res = 0;
        const queue = [[root, root.val]];

        while (queue.length) {
            const [node, max] = queue.shift();

            if (node.val >= max) {
                res++;
            }

            const newMax = Math.max(node.val, max);
            if (node.left) {
                queue.push([node.left, newMax]);
            }
            if (node.right) {
                queue.push([node.right, newMax]);
            }
        }

        return res;
    }
}
