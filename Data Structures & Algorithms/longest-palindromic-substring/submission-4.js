class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        let resIdx = 0, resLen = 0;

        for (let i = 0; i < n; i++) {
            let l = i, r = i;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }

            l = i, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    resIdx = l;
                    resLen = r - l + 1;
                }
                l--;
                r++;
            }
        }

        return s.slice(resIdx, resIdx + resLen);
    }
}
