class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const prqMap = new Map();

        for (let c = 0; c < numCourses; c++) {
            prqMap.set(c, []);
        }

        for (const [crs, prq] of prerequisites) {
            prqMap.get(crs).push(prq);
        }

        const visited = new Set();

        const dfs = (crs) => {
            if (visited.has(crs)) {
                return false;
            }

            if (prqMap.get(crs).length === 0) {
                return true;
            }

            visited.add(crs);

            for (const prq of prqMap.get(crs)) {
                if (!dfs(prq)) {
                    return false;
                }
            }

            visited.delete(crs);
            prqMap.set(crs, []);
            return true;
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }

        return true;
    }
}
