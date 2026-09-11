class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            const map = new Map();
            let maxFreq = 0;

            for (let j = i; j < s.length; j++) {
                map.set(s[j], (map.get(s[j]) || 0) + 1);
                maxFreq = Math.max(maxFreq, map.get(s[j]));
                if (j - i + 1 - maxFreq <= k) {
                    res = Math.max(res, j - i + 1);
                } else {
                    break;
                }
            }
        }

        return res;
    }
}
