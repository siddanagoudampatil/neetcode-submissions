class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let idx = s2.charCodeAt(r) - 97;
            count2[idx]++;
            if (count1[idx] === count2[idx]) {
                matches++;
            } else if (count1[idx] + 1 === count2[idx]) {
                matches--;
            }

            idx = s2.charCodeAt(l) - 97;
            count2[idx]--;
            if (count1[idx] === count2[idx]) {
                matches++;
            } else if (count1[idx] - 1 === count2[idx]) {
                matches--;
            }

            l++;
        }

        return matches === 26;
    }
}
