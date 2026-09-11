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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        if (!root) return JSON.stringify(res);

        const queue = [root];

        while (queue.length) {
            const node = queue.shift();
            if (node) {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                res.push(node);
            }
        }

        return JSON.stringify(res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = JSON.parse(data);

        if (data.length <= 0) return null;

        const root = new TreeNode(data[0]);
        const queue = [root];

        let i = 1;

        while (i < data.length) {
            const node = queue.shift();
            const leftNodeVal = data[i++];
            if (leftNodeVal !== null) {
                const leftNode = new TreeNode(leftNodeVal);
                node.left = leftNode;
                queue.push(leftNode);
            }
            const rightNodeVal = data[i++];
            if (rightNodeVal !== null) {
                const rightNode = new TreeNode(rightNodeVal);
                node.right = rightNode;
                queue.push(rightNode);
            }
        }

        return root;
    }
}
