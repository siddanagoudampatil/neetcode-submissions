/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const time = [];

        for (const interval of intervals) {
            time.push([interval.start, 1]);
            time.push([interval.end, -1]);
        }

        time.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

        let res = 0, count = 0;

        for (const t of time) {
            count += t[1];
            res = Math.max(res, count);
        }

        return res;
    }
}
