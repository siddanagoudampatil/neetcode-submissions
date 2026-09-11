class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
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

        let res = "";
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (j - i + 1 > res.length && isPalindrome(i, j)) {
                    res = s.slice(i, j + 1);
                }
            }
        }

        return res;
    }
}
