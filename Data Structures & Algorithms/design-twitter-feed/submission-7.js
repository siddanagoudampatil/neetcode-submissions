class Twitter {
    constructor() {
        this.followMap = {};
        this.tweetMap = {};
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap[userId]) {
            this.tweetMap[userId] = [];
        }
        this.tweetMap[userId].push([tweetId, this.time++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const followeeList = [userId];
        followeeList.push(...Array.from(this.followMap[userId] || new Set()));
        const heap = new MaxPriorityQueue((x) => x[1]);

        for (const followeeId of followeeList) {
            if (this.tweetMap[followeeId]) {
                for (const tweet of this.tweetMap[followeeId]) {
                    heap.enqueue(tweet);
                }
            }
        }

        const feeds = [];
        console.log(userId)
        while (heap.size() > 0 && feeds.length < 10) {
            // console.log(heap.dequeue())
            feeds.push(heap.dequeue()[0]);
        }

        return feeds;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap[followerId]) {
            this.followMap[followerId] = new Set();
        }
        this.followMap[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap[followerId] && this.followMap[followerId].has(followeeId)) {
            this.followMap[followerId].delete(followeeId)
        }
    }
}
