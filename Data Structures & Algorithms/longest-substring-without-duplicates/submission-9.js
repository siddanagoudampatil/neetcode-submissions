class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 1) return 0;
        if (s.length === 1) return 1;
        let res = 0;
        let i = 0;
        const set = new Set();
        
        for (let j = 0; j < s.length; j++) {
            while (set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }
            set.add(s[j]);
            res = Math.max(res, j - i + 1)
        }

        return res;
    }
}
