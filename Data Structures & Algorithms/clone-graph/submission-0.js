/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = {};

        const dfs = (node) => {
            if (!node) {
                return null;
            }
            
            if (map[node.val]) {
                return map[node.val];
            }

            const newNode = new Node(node.val);
            map[node.val] = newNode;
            for (const neighbor of node.neighbors) {
                newNode.neighbors.push(dfs(neighbor));
            }
            return newNode;
        }

        return dfs(node);
    }
}
