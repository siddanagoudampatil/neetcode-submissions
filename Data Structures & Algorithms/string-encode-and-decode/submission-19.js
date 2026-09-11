class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        const res = [];

        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.slice(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.slice(i, j));
            i = j;
        }

        return res;
    }
}
