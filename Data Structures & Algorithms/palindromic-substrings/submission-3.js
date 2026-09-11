class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
            let l = i, r = i;
            while (l >= 0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }

            l = i, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        }

        return res;
    }
}
