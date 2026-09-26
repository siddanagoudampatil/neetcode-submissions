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
        const map = new Map();
        for (const interval of intervals) {
            map.set(interval.start, (map.get(interval.start) || 0) + 1);
            map.set(interval.end, (map.get(interval.end) || 0) - 1);
        }

        const time = Array.from(map.keys()).sort((a, b) => a - b);
        let count = 0, res = 0;

        for (const t of time) {
            count += map.get(t);
            res = Math.max(res, count);
        }

        return res;
    }
}
