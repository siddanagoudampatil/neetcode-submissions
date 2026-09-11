class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let res = 0;

        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }

            return true;
        }

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                if (isPalindrome(i, j)) {
                    res++;
                }
            }
        }

        return res;
    }
}
