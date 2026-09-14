class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.minHeap.isEmpty() || num > this.minHeap.front()) {
            this.minHeap.enqueue(num);
        } else {
            this.maxHeap.enqueue(num);
        }

        if (this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        } else if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front();
        }

        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }

        return (this.minHeap.front() + this.maxHeap.front()) / 2.0;
    }
}