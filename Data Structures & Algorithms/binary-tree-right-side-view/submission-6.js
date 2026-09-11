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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return true;
        const res = [];
        const queue = [root];
        while (queue.length) {
            const size = queue.length;
            let rightNode = null;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node) {
                    rightNode = node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }

            if (rightNode) {
                res.push(rightNode.val);
            }
        }

        return res;
    }
}
