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

        const adjArr = Array.from({ length: n }, () => []);
        for (const [n1, n2] of edges) {
            adjArr[n1].push(n2);
            adjArr[n2].push(n1);
        }

        const visited = new Set();

        const dfs = (node, parent) => {
            if (visited.has(node)) {
                return false;
            }

            visited.add(node);

            for (const child of adjArr[node]) {
                if (child === parent) {
                    continue;
                }

                if (!dfs(child, node)) {
                    return false;
                }
            }

            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
