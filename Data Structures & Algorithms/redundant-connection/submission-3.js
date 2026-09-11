class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const adj = Array.from({ length: n + 1 }, () => []);

        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visited = new Array(n).fill(false);
        const cycle = new Set();
        let cycleStart = -1;

        const dfs = (node, parent) => {
            if (visited[node]) {
                cycleStart = node;
                return true;
            }

            visited[node] = true;

            for (const nei of adj[node]) {
                if (nei === parent) {
                    continue;
                }

                if (dfs(nei, node)) {
                    if (cycleStart !== -1) {
                        cycle.add(node);
                    }

                    if (node === cycleStart) {
                        cycleStart = -1;
                    }

                    return true;
                }
            }

            return false;
        }

        dfs(1, -1);

        for (let i = n - 1; i >= 0; i--) {
            const [n1, n2] = edges[i];
            if (cycle.has(n1) && cycle.has(n2)) {
                return [n1, n2];
            }
        }

        return [-1, -1];
    }
}
