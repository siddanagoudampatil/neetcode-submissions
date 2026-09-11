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

        const map = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            map[s.charCodeAt(i) - 97]++;
            map[t.charCodeAt(i) - 97]--;
        }

        return map.every((val) => val === 0);
    }
}
