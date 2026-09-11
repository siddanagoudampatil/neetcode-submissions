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

        const bfs = (node) => {
            const queue = [node];
            visited[node] = true;

            while (queue.length) {
                const curr = queue.shift();

                for (const child of adj[curr]) {
                    if (!visited[child]) {
                        queue.push(child);
                        visited[child] = true;
                    }
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                bfs(i);
                res++;
            }
        }

        return res;
    }
}
