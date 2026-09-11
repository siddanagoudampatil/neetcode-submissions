class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => {
            return /[a-zA-Z0-9]/.test(char);
        }

        s = s.split("").map((val) => val && isAlphanumeric(val) ? val.toLowerCase() : '').join("");
        
        let i = 0, j = s.length - 1;

        while (i < j) {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    }
}
