class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let res = 0;
        const adj = Array.from({ length: n }, () => []);
        for (const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visited = new Array(n).fill(false);

        const dfs = (node) => {
            if (visited[node]) {
                return;
            }

            visited[node] = true;

            for (const child of adj[node]) {
                dfs(child);
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i);
                res++;
            }
        }

        return res;
    }
}
