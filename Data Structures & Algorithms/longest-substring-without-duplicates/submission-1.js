class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 1) return 0;
        if (s.length === 1) return 1;
        let res = 1;

        for (let i = 0; i < s.length; i++) {
            const set = new Set();
            set.add(s[i]);
            let j = i + 1;
            while (j < s.length) {
                if (set.has(s[j])) {
                    break;
                }
                set.add(s[j]);
                j++;
            }
            res = Math.max(res, j - i);
        }

        return res;
    }
}
