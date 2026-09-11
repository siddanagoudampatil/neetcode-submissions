class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const sCount = {};
        const tCount = {};
        let res = "";

        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        const need = Object.keys(tCount).length;
        let have = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            sCount[c] = (sCount[c] || 0) + 1;

            if (tCount[c] && sCount[c] === tCount[c]) {
                have++;
            }

            while (have === need) {
                if (res === "" || r - l + 1 < res.length) {
                    res = s.slice(l, r + 1);
                }

                const c = s[l];
                if (tCount[c] && sCount[c] === tCount[c]) {
                    have--;
                }
                sCount[c]--;
                l++;
            }
        }

        return res;
    }
}
