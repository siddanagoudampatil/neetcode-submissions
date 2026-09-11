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
        const dfs = (root) => {
            if (!root) {
                return "null";
            }
            return root.val + "," + dfs(root.left) + "," + dfs(root.right);
        }

        const res = dfs(root);
        return res;
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
            const root = new TreeNode(parseInt(arr[idx[0]]))
            idx[0]++;
            root.left = dfs(arr, idx);
            idx[0]++;
            root.right = dfs(arr, idx);
            return root;
        }

        return dfs(data, [0]);
    }
}
