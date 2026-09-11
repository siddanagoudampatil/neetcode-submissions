class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        const map = new Map();
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            if (map.has(s[r])) {
                l = Math.max(l, map.get(s[r]) + 1);
            }
            map.set(s[r], r);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
