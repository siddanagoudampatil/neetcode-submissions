class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for (const [crs, prq] of prerequisites) {
            adj[prq].push(crs);
            indegree[crs]++;
        }

        const queue = [];
        for (let c = 0; c < numCourses; c++) {
            if (indegree[c] === 0) {
                queue.push(c);
            }
        }

        const res = [];

        while (queue.length) {
            const crs = queue.shift();
            res.push(crs);
            for (const nei of adj[crs]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }

        return res.length === numCourses ? res : [];
    }
}
