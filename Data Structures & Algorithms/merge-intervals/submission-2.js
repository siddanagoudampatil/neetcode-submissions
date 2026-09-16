class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const n = intervals.length;
        if (n <= 1) {
            return intervals;
        }

        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        let i = 0;

        while (i < n) {
            const curr = intervals[i];

            while (i < n && curr[1] >= intervals[i][0]) {
                curr[0] = Math.min(curr[0], intervals[i][0]);
                curr[1] = Math.max(curr[1], intervals[i][1]);
                i++;
            }

            res.push(curr);
        }

        return res;
    }
}
