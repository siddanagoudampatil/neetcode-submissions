class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            return [[strs[0]]];
        }
        const res = [];
        const flags = new Array(strs.length).fill(false);
        for (let i = 0; i < strs.length; i++) {
            if (!flags[i]) {
                let arr = [strs[i]];
                const str1 = strs[i].split("").sort().join("");
                for (let j = i + 1; j < strs.length; j++) {
                    const str2 = strs[j].split("").sort().join("");
                    if (str1 === str2) {
                        arr = [...arr, strs[j]];
                        flags[j] = true;
                    }
                }
                if (arr.length > 0) {
                    res.push(arr);
                }
            }
        }
        return res;
    }
}
