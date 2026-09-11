class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        const maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }

        let time = 0;
        const queue = [];

        while (maxHeap.size() > 0 || queue.length > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const currCount = maxHeap.pop() - 1;
                if (currCount > 0) {
                    queue.push([currCount, time + n]);
                }
            }

            if (queue.length > 0 && queue[0][1] === time) {
                maxHeap.push(queue.shift()[0]);
            }
        }

        return time;
    }
}
