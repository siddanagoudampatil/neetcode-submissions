class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        if (s.length === 0) return true;

        const map = {};
        for (const char of s) {
            map[char] = map[char] ? map[char] + 1 : 1;
        }

        for (const char of t) {
            if (!map[char]) return false;
            map[char]--;
        }

        return true;
    }
}
