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

        intervals.sort((a, b) => a.start - b.end);
        let i = 0;

        while (i < n) {
            if (i + 1 < n && intervals[i].end > intervals[i + 1].start) {
                return false;
            }
            i++;
        }

        return true;
    }
}
