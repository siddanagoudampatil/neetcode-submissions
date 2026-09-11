class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // if (strs.length === 0) return ".";
	    // return strs.join('","');

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
        // if (str === ".") {
        //     return [];
        // }

        // return str.split('","');

        if (str === "") {
            return [];
        }
        let i = 0,
            res = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
