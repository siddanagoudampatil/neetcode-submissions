class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {};
        let res = 0, l = 0, maxFreq = 0;

        for (let r = 0; r < s.length; r++) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[r]]);

            while (r - l + 1 - maxFreq > k) {
                map[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
