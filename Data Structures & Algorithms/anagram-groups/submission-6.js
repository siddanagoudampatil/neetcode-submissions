class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (const str of strs) {
            const sortedStr = str.split("").sort().join("");

            if (res[sortedStr]) {
                res[sortedStr].push(str);
            } else {
                res[sortedStr] = [str];
            }
        }

        return Object.values(res);
    }
}
