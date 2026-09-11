class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const c of str) {
                count[c.charCodeAt(0) - 97]++;
            }
            const sorted = count.join(',');
            if (!map[sorted]) {
                map[sorted] = [];
            }
            map[sorted].push(str);
        }

        return Object.values(map);
    }
}
