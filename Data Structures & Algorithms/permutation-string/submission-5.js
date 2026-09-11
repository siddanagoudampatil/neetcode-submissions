class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length, n2 = s2.length;
        if (n1 > n2) return false;

        const freq1 = new Array(26).fill(0);
        const freq2 = new Array(26).fill(0);

        for (let i = 0; i < n1; i++) {
            freq1[s1.charCodeAt(i) - 97]++;
            freq2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (freq1[i] === freq2[i]) {
                matches++;
            }
        }

        let l = 0;

        for (let r = n1; r < n2; r++) {
            if (matches === 26) {
                return true;
            }

            const idx1 = s2.charCodeAt(r) - 97;
            freq2[idx1]++;

            if (freq2[idx1] === freq1[idx1]) {
                matches++;
            } else if (freq2[idx1] - 1 === freq1[idx1]) {
                matches--;
            }

            const idx2 = s2.charCodeAt(l) - 97;
            freq2[idx2]--;

            if (freq2[idx2] === freq1[idx2]) {
                matches++;
            } else if (freq2[idx2] + 1 === freq1[idx2]) {
                matches--;
            }
            l++;
        }

        return matches === 26;
    }
}
