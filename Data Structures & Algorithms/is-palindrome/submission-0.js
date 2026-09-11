class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (char) => {
            return /^[a-zA-Z0-9]+$/.test(char);
        };

        let newStr = "";

        for (const char of s) {
            if (isAlphaNumeric(char)) {
                newStr = newStr + char.toLowerCase();
            }
        }

        let i = 0,
            j = newStr.length - 1;
        while (i < j) {
            if (newStr[i] !== newStr[j]) return false;
            i++;
            j--;
        }

        return true;
    }
}
