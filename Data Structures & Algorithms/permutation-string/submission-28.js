class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const count = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        for (const c of s1) {
            count[c.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < s1.length; i++) {
            window[s2[i].charCodeAt(0) - 97]++;
        }

        let l = 0, r = s1.length;

        while (r < s2.length) {
            console.log(l, r)
            if (count.join(',') === window.join(',')) {
                return true;
            }
            window[s2[r++].charCodeAt(0) - 97]++;
            window[s2[l++].charCodeAt(0) - 97]--;
        }

        return count.join(',') === window.join(',');
    }
}
