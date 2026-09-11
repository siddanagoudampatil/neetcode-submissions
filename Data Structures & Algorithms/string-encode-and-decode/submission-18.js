class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        if (strs.length === 0) return "";

        for (const str of strs) {
            res += str.length + "$";
        }

        res+="#"

        for (const str of strs) {
            res += str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        if (str.length === 0) return [];
        const lengths = [];

        let i = 0;

        while (str[i] !== "#") {
            let j = i;
            while (str[j] !== "$") {
                j++;
            }
            lengths.push(parseInt(str.slice(i, j)));
            i = j + 1;
        }

        i++;
        const res = [];
        for (const length of lengths) {
            res.push(str.slice(i, i + length));
            i += length;
        }
        return res;
    }
}
