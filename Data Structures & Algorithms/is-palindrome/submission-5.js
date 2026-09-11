class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = (c) => {
            return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'));
        }

        let newStr = "";

        for (const c of s) {
            if (isAlnum(c)) {
                newStr += c.toLowerCase();
            }
        }

        return newStr === newStr.split('').reverse().join('');
    }
}
