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

        t = t.split("");

        for (let i = 0; i < s.length; i++) {
            let found = false;

            for (let j = 0; j < t.length; j++) {
                if (s[i] === t[j]) {
                    found = true;
                    t[j] = null;
                    break;
                }
            }

            if (!found) {
                return false;
            }
        }

        return true;
    }
}
