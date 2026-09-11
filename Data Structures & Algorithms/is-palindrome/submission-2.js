class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAplhaNumeric = (char) => {
            return /[A-Za-z0-9]/.test(char);
        }

        let i = 0, j = s.length - 1;

        while (i < j) {
            while (i < j && !isAplhaNumeric(s[i])) {
                i++;
            }

            while (j > i && !isAplhaNumeric(s[j])) {
                j--;
            }

            if (s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    }
}
