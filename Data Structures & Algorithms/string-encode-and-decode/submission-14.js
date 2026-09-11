class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let res = "";

        for (const str of strs) {
            res += str.length + ",";
        }

        res += "#";

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
        if (str.length === 0) return [];
        const sizes = [];
        const res = [];

        let i = 0;
        while (str[i] !== "#") {
            let size = "";
            while (str[i] !== ",") {
                size += str[i];
                i++;
            }
            sizes.push(parseInt(size));
            i++;
        }
        i++;
        for (const size of sizes) {
            res.push(str.slice(i, i + size));
            i += size;
        }

        return res;
    }
}
