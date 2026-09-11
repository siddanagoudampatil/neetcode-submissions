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
        const map = new Map();
        map.set(null, [0, 0]);

        while (stack.length > 0) {
            const node = stack[stack.length - 1];

            if (node.left && !map.has(node.left)) {
                stack.push(node.left);
            } else if (node.right && !map.has(node.right)) {
                stack.push(node.right);
            } else {
                const curr = stack.pop();
                const [leftHeight, leftDiameter] = map.get(curr.left);
                const [rightHeight, rightDiameter] = map.get(curr.right);
                const height = 1 + Math.max(leftHeight, rightHeight);
                const diameter = Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

                map.set(curr, [height, diameter]);
            }
        }

        return map.get(root)[1];
    }
}
