class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanum = (char) => {
            return /[a-z0-9]/i.test(char);
        }

        let i = 0, j = s.length - 1;

        while (i < j) {
            while (i < j && !isAlphanum(s[i])) {
                i++;
            }

            while (i < j && !isAlphanum(s[j])) {
                j--;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}
