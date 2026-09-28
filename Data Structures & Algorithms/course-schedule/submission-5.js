class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);
        const visited = new Array(numCourses).fill(false);

        for (const [crs, pre] of prerequisites) {
            adjList[crs].push(pre);
        }

        const dfs = (crs) => {
            if (visited[crs]) {
                return false;
            }

            if (adjList[crs].length === 0) {
                return true;
            }

            visited[crs] = true;
            for (const pre of adjList[crs]) {
                if (!dfs(pre)) {
                    return false;
                }
            }
            visited[crs] = false;
            adjList[crs] = [];

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
