class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();

        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        for (const [crs, prq] of prerequisites) {
            preMap.get(crs).push(prq);
        }

        const visited = new Set();

        const dfs = (crs) => {
            if (visited.has(crs)) {
                return false;
            }

            if (preMap.get(crs).length === 0);

            visited.add(crs);
            for (const prq of preMap.get(crs)) {
                if (!dfs(prq)) {
                    return false;
                }
            }

            visited.delete(crs);
            preMap.set(crs, []);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
