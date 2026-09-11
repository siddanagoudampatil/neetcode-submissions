class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        const count = new Array(26).fill(false);

        let l = 0, r = 0;

        while (r < s.length) {
            while (count[s[r].charCodeAt(0) - 97]) {
                count[s[l].charCodeAt(0) - 97] = false;
                l++;
            }
            count[s[r].charCodeAt(0) - 97] = true;
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
