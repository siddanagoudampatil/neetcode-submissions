class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') {
            return '';
        }

        const countT = {};
        for (const ele of t) {
            countT[ele] = (countT[ele] || 0) + 1;
        }

        let res = -1;
        let resLen = Infinity;
        let l = 0;

        const window = {};
        let have = 0, need = Object.keys(countT).length;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (window[c] === (countT[c] || 0)) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = l;
                }

                window[s[l]]--;
                if (window[s[l]] < (countT[s[l]] || 0)) {
                    have--;
                }
                l++;
            }
        }

        return resLen !== Infinity ? s.substring(res, res + resLen) : '';
    }
}
