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

        const keys = Array.from(map.keys()).sort((a, b) => a - b);
        let prev = 0, res = 0;

        for (const key of keys) {
            prev += map.get(key);
            res = Math.max(res, prev);
        }

        return res;
    }
}
