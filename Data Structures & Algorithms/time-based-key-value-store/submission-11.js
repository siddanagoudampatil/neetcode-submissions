class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];

        let l = 0, r = values.length - 1;
        let res = "";

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (values[mid][0] <= timestamp) {
                res = values[mid][1];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}
