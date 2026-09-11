class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const prqMap = new Map();
        for (let c = 0; c < numCourses; c++) {
            prqMap.set(c, []);
        }
        for (const [crs, prq] of prerequisites) {
            prqMap.get(crs).push(prq);
        }

        const res = []
        const visited = new Set();
        const cycle = new Set();

        const dfs = (crs) => {
            if (cycle.has(crs)) {
                return false;
            }

            if (visited.has(crs)) {
                return true;
            }

            cycle.add(crs);
            for (const prq of prqMap.get(crs)) {
                if (!dfs(prq)) {
                    return false;
                }
            }

            cycle.delete(crs);
            visited.add(crs);
            res.push(crs);
            return true;
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return [];
            }
        }

        return res;
    }
}
