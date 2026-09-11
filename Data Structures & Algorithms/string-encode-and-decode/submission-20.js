class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];
        for (const str of strs) {
            res.push(str.length + '#' + str);
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = Number(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length
        }

        return res;
    }
}
