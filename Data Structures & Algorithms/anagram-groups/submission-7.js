class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const sortedStr = str.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
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
