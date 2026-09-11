class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length, n2 = s2.length;
        if (n1 > n2) return false;

        const freq1 = {};
        for (const char of s1) {
            freq1[char] = (freq1[char] || 0) + 1;
        }

        for (let i = 0; i < n2; i++) {
            let freq2 = {};
            let match = 0;

            for (let j = i; j < n2; j++) {
                const char = s2[j];
                freq2[char] = (freq2[char] || 0) + 1;

                if ((freq1[char] || 0) < freq2[char]) {
                    break;
                }

                if ((freq2[char] || 0) === freq1[char]) {
                    match++;
                }

                if (match === Object.keys(freq1).length) {
                    return true;
                }
            }
        }

        return false;
    }
}
