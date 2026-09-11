class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length <= 0) return 0;
        if (s.length === 1) return 1;

        let res = 0;

        for (let i = 0; i < s.length; i++) {
            const freq = new Map();
            let maxFreq = 0;

            for (let j = i; j < s.length; j++) {
                freq.set(s[j], (freq.get(s[j]) || 0) + 1);
                maxFreq = Math.max(maxFreq, freq.get(s[j]));

                if (j - i + 1 - maxFreq <= k) {
                    res = Math.max(res, j - i + 1);
                }
            }
        }

        return res;
    }
}
