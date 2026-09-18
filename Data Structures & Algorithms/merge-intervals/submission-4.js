class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const map = new Map();
        for (const [start, end] of intervals) {
            map.set(start, (map.get(start) || 0) + 1);
            map.set(end, (map.get(end) || 0) - 1);
        }

        const keys = Array.from(map.keys()).sort((a, b) => a - b);
        const res = [];
        let interval = [];
        let have = 0;

        for (const key of keys) {
            if (interval.length === 0) {
                interval.push(key);
            }

            have += map.get(key);
            if (have === 0) {
                interval.push(key);
                res.push(interval);
                interval = [];
            }
        }

        return res;
    }
}
