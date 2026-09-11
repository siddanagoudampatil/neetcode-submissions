class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        let maxCount = 0;
        let max = 0;
        for (let i = 0; i < 26; i++) {
            if (max < count[i]) {
                max = count[i];
                maxCount = 1;
            } else if (max === count[i]) {
                maxCount++;
            }
        }

        return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
    }
}
