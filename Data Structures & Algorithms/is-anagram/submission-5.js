class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        for (const char of s) {
            if (map[char]) map[char]++;
            else map[char] = 1;
        }

        for (const char of t) {
            if (!map[char]) return false;
            else map[char]--;
        }

        for (const e in map) {
            if (map[e]) return false;
        }

        return true;
    }
}
