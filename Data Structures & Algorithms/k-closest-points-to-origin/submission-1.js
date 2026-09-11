class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MaxPriorityQueue(x => x[1]);

        for (const point of points) {
            const [x, y] = point;
            const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            minHeap.enqueue([point, dist]);
            if (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            if (minHeap.size() > 0) {
                res.push(minHeap.dequeue()[0]);
            }
        }

        return res;
    }
}
