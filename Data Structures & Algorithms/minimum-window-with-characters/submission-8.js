class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = {};
        const sCount = {};
        let res = "";

        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }
        const need = Object.keys(tCount).length;
        let l = 0;
        let have = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            sCount[c] = (sCount[c] || 0) + 1;

            if (tCount[c] === sCount[c]) {
                have++;
            }

            while (have === need) {
                if (res === "" || r - l + 1 < res.length) {
                    res = s.slice(l, r + 1);
                }

                sCount[s[l]]--;
                if (tCount[s[l]] && sCount[s[l]] < tCount[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return res;
    }
}
