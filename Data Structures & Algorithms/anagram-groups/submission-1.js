class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            return [[strs[0]]];
        }
        const map = {};
        for (let i = 0; i < strs.length; i++) {
            const sortedArr = strs[i].split("").sort().join("");
            if (map[sortedArr]) {
                map[sortedArr] = [...map[sortedArr], strs[i]];
            } else {
                map[sortedArr] = [strs[i]];
            }
        }
        return Object.keys(map).map((key) => map[key]);
    }
}
