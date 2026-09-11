class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const sorted = str.split('').sort().join();
            if (!map[sorted]) {
                map[sorted] = [];
            }
            map[sorted].push(str);
        }

        return Object.values(map);
    }
}
