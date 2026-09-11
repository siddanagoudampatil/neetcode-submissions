class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const adj = Array.from({ length: n + 1 }, () => []);

        let visited;

        const dfs = (node, parent) => {
            if (visited[node]) {
                return true;
            }

            visited[node] = true;

            for (const child of adj[node]) {
                if (child === parent) {
                    continue;
                }

                if (dfs(child, node)) {
                    return true;
                }
            }

            return false;
        }

        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
            visited = new Array(n + 1).fill(false);
            if (dfs(n1, -1)) {
                return [n1, n2];
            }
        }

        return [];
    }
}
