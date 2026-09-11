class Twitter {
    constructor() {
        this.tweetMap = new Map();
        this.followMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (this.tweetMap.has(userId)) {
            this.tweetMap.get(userId).push([this.time, tweetId]);
        } else {
            this.tweetMap.set(userId, [[this.time, tweetId]]);
        }
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const feed = [...(this.tweetMap.get(userId) || [])];

        (this.followMap.get(userId) || new Set()).forEach((followeeId) => {
            feed.push(...(this.tweetMap.get(followeeId) || []));
        });

        feed.sort((a, b) => b[0] - a[0]);
        return feed.slice(0, 10).map((x) => x[1]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId !== followeeId) {
            if (!this.followMap.has(followerId)) {
                this.followMap.set(followerId, new Set());
            }

            this.followMap.get(followerId).add(followeeId);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
