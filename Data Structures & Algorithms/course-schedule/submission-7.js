class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);
        for (const [c, p] of prerequisites) {
            adjList[c].push(p);
        }

        const visited = new Array(numCourses).fill(false);

        const dfs = (c) => {
            if (adjList[c].length === 0) {
                return true;
            }

            if (visited[c]) {
                return false;
            }

            visited[c] = true;
            for (const p of adjList[c]) {
                if (!dfs(p)) {
                    return false;
                }
            }
            visited[c] = false;
            adjList[c] = [];

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
