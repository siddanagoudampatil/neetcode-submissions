class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length <= 0) {
            return 0;
        }

        if (stones.length === 1) {
            return stones[0];
        }

        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            const w1 = maxHeap.dequeue();
            const w2 = maxHeap.dequeue();

            if (w1 === w2) {
                continue;
            } else {
                maxHeap.enqueue(w1 - w2);
            }
        }

        return maxHeap.size() > 0 ? maxHeap.dequeue() : 0;
    }
}
