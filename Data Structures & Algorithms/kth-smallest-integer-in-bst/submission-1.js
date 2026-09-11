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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const arr = [k, 0];
        this.dfs(root, arr);
        return arr[1];
    }

    dfs(root, arr) {
        if (!root) return;
        if (root.left) this.dfs(root.left, arr);
        if (arr[0] === 0) return;
        arr[0]--;
        if (arr[0] === 0) {
            arr[1] = root.val;
            return;
        }
        if (root.right) this.dfs(root.right, arr);
    }
}
