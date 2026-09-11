class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let res = 0;

        const isPalindrome = (l, r) => {
            while (l >= 0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        }

        for (let i = 0; i < n; i++) {
            isPalindrome(i, i);
            isPalindrome(i, i + 1);
        }

        return res;
    }
}
