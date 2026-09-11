class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        const map = new Map();

        let l = 0, r = 0;

        while (r < s.length) {
            if (map.has(s[r])) {
                while (map.has(s[r])) {
                    map.delete(s[l]);
                    l++;
                }
            } else {
                map.set(s[r], true);
                res = Math.max(res, r - l + 1);
                r++;
            }
        }

        return res;
    }
}
