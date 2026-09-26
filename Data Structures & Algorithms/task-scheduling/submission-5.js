class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = {};
        let maxFreq = 0;
        let maxCount = 0;

        for (const task of tasks) {
            map[task] = (map[task] || 0) + 1;

            if (map[task] > maxFreq) {
                maxFreq = map[task];
                maxCount = 1;
            } else if (map[task] === maxFreq) {
                maxCount++;
            }
        }

        const cycles = (maxFreq - 1) * (n + 1) + maxCount;

        return cycles < tasks.length ? tasks.length : cycles;
    }
}
