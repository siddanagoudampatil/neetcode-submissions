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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;
        if (n <= 1) {
            return true;
        }

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (Math.min(intervals[i].end, intervals[j].end) > Math.max(intervals[i].start, intervals[j].start)) {
                    return false;
                }
            }
        }

        return true;
    }
}
