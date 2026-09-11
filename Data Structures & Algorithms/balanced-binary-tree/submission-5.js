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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        const stack = [root];
        const map = new Map();
        map.set(null, 0);

        while (stack.length) {
            const node = stack[stack.length - 1];

            if (node.left && !map.has(node.left)) {
                stack.push(node.left);
            } else if (node.right && !map.has(node.right)) {
                stack.push(node.right);
            } else {
                stack.pop();
                const leftHeight = map.get(node.left);
                const rightHeight = map.get(node.right);
                if (Math.abs(leftHeight - rightHeight) > 1) {
                    return false;
                }
                map.set(node, Math.max(leftHeight, rightHeight) + 1);
            }
        }

        return true;
    }
}
