class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            let j = i;
            const set = new Set();

            while (j < s.length && !set.has(s[j])) {
                set.add(s[j]);
                j++;
            }

            res = Math.max(res, j - i);
        }

        return res;
    }
}
