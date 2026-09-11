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
        this.dfsSeralize(root, res);
        return res.join(",")
    }

    dfsSeralize(root, res) {
        if (!root) {
            res.push("NULL");
            return;
        }
        res.push(root.val.toString());
        this.dfsSeralize(root.left, res);
        this.dfsSeralize(root.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");
        if (data[0] === "NULL") return null;

        const idx = [0];
        return this.dfsDeserialize(data, idx);
    }

    dfsDeserialize(data, idx) {
        if (data[idx[0]] === "NULL") {
            idx[0]++;
            return null;
        }
        const root = new TreeNode(data[idx[0]]);
        idx[0]++;
        root.left = this.dfsDeserialize(data, idx);
        root.right = this.dfsDeserialize(data, idx);

        return root;
    }
}
