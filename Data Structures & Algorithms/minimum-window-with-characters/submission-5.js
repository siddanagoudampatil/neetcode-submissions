class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = "";
        const count1 = {};

        for (const c of t) {
            count1[c] = (count1[c] || 0) + 1;
        }

        const need = Object.keys(count1).length;
        for (let i = 0; i < s.length; i++) {
            let curr = 0;
            const count2 = {};
            for (let j = i; j < s.length; j++) {
                count2[s[j]] = (count2[s[j]] || 0) + 1;

                if (count1[s[j]] === count2[s[j]]) {
                    curr++;
                }

                if (curr === need) {
                    if (res === "" || j - i + 1 < res.length) {
                        res = s.slice(i, j + 1);
                    } else {
                        break;
                    }
                }
            }
        }

        return res;
    }
}
