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
            const A = intervals[i];
            for (let j = i + 1; j < n; j++) {
                const B = intervals[j];

                if (A.start <= B.start && A.end > B.start) {
                    return false;
                } else if (A.start > B.start && B.end > A.start) {
                    return false;
                }
            }
        }

        return true;
    }
}
