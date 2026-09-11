class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = "";
        const tCount = {};

        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        const need = Object.keys(tCount).length;

        for (let i = 0; i < s.length; i++) {
            const sCount = {};
            let curr = 0;

            for (let j = i; j < s.length; j++) {
                const c = s[j];
                sCount[c] = (sCount[c] || 0) + 1;

                if (tCount[c] === sCount[c]) {
                    curr++;
                }

                if (curr === need) {
                    if (res === "" || j - i + 1 < res.length) {
                        res = s.slice(i, j + 1);
                    }
                    break;
                }
            }
        }

        return res;
    }
}
