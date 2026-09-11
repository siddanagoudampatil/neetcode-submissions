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
        if (!root) return "N";

        const queue = [root];
        while (queue.length) {
            const node = queue.shift();

            if (!node) {
                res.push("N");
            } else {
                res.push(node.val.toString());
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");

        if (data[0] === "N") return null;

        const root = new TreeNode(Number(data[0]));
        const queue = [root];
        let idx = 1;

        while (queue.length) {
            const node = queue.shift();

            if (data[idx] !== "N") {
                node.left = new TreeNode(Number(data[idx]));
                queue.push(node.left);
            }
            idx++;

            if (data[idx] !== "N") {
                node.right = new TreeNode(Number(data[idx]));
                queue.push(node.right);
            }
            idx++;
        }

        return root;
    }
}
