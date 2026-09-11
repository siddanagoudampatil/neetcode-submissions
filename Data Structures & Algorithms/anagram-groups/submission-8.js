class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const sortedStr = str.split("").sort().join("");
            console.log(sortedStr)
            if (map[sortedStr]) {
                map[sortedStr].push(str);
            } else {
                map[sortedStr] = [str];
            }
        }

        return Object.values(map);
    }
}
