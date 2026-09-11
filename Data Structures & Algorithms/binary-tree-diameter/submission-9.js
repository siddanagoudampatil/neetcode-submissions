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
    diameterOfBinaryTree(root) {
        if (!root) return 0;
        const stack = [root];
        const mp = new Map();
        mp.set(null, [0, 0]);

        while (stack.length) {
            const node = stack[stack.length - 1];

            if (node.left && !mp.has(node.left)) {
                stack.push(node.left);
            } else if (node.right && !mp.has(node.right)) {
                stack.push(node.right);
            } else {
                stack.pop();
                const [leftHeight, leftDiameter] = mp.get(node.left);
                const [rightHeight, rightDiameter] = mp.get(node.right);
                const height = Math.max(leftHeight, rightHeight) + 1;
                const diameter = Math.max(leftHeight + rightHeight, leftDiameter, rightDiameter);
                mp.set(node, [height, diameter]);
            }
        }

        return mp.get(root)[1];
    }
}
