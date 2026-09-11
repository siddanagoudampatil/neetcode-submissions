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
        const dfs = (root) => {
            if (!root) {
                res.push("null");
                return;
            }

            res.push(root.val.toString());
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
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

        const dfs = (arr, idx) => {
            if (arr[idx[0]] === "null") {
                return null;
            }

            const root = new TreeNode(Number(arr[idx[0]]));
            idx[0]++;
            root.left = dfs(arr, idx);
            idx[0]++;
            root.right = dfs(arr, idx);
            return root;
        }

        return dfs(data, [0]);
    }
}
