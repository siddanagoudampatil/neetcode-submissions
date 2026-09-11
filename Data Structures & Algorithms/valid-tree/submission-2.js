class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        }

        const adj = Array.from({ length: n }, () => []);
        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visited = new Set();

        const queue = [[0, -1]];
        visited.add(0);

        while (queue.length) {
            const [node, parent] = queue.shift();
            for (const child of adj[node]) {
                if (child === parent) {
                    continue;
                }
                if (visited.has(child)) {
                    return false;
                }
                queue.push([child, node]);
                visited.add(child);
            }
        }

        return visited.size === n;
    }
}
