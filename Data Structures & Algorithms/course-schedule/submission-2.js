class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjArr = Array.from({ length: numCourses }, () => []);
        const indegree = new Array(numCourses).fill(0);

        for (const [crs, prq] of prerequisites) {
            adjArr[prq].push(crs);
            indegree[crs]++;
        }

        const queue = [];
        for (let c = 0; c < numCourses; c++) {
            if (indegree[c] === 0) {
                queue.push(c);
            }
        }

        let coursesTaken = 0;
        while (queue.length) {
            const crs = queue.shift();
            coursesTaken++;
            for (const neighbor of adjArr[crs]) {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return coursesTaken === numCourses;
    }
}
