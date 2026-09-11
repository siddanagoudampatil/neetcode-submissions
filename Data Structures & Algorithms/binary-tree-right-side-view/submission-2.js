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
        const res = [];
        if (!root) return [];

        const queue = [root];

        while (queue.length) {
            let rightMost = null;
            const currQueueLength = queue.length;

            for (let i = 0; i < currQueueLength; i++) {
                const currNode = queue.shift();

                if (currNode) {
                    rightMost = currNode;
                    queue.push(currNode.left);
                    queue.push(currNode.right);
                }
            }

            if (rightMost) {
                res.push(rightMost.val);
            }
        }

        return res;
    }
}
