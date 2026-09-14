class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        let i = 0;

        while (i < intervals.length) {
            let j = i;
            const newInterval = intervals[j];
            while (j < intervals.length && newInterval[1] >= intervals[j][0]) {
                newInterval[0] = Math.min(newInterval[0], intervals[j][0]);
                newInterval[1] = Math.max(newInterval[1], intervals[j][1]);
                j++;
            }

            res.push(newInterval);
            i = j;
        }

        return res;
    }
}
