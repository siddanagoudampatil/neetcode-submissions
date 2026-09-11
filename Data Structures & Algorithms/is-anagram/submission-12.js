class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            let idx = s[i].charCodeAt(0) - 97;
            count[idx]++;
            
            idx = t[i].charCodeAt(0) - 97;
            count[idx]--;
        }

        for (let val of count) {
            if (val !== 0) {
                return false;
            }
        }

        return true;
    }
}
