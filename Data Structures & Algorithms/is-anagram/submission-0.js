class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        if (s.length === 0) return true;

        const map1 = {}, map2 = {};
        for (let i = 0; i < s.length; i++) {
            map1[s[i]] = map1[s[i]] ? map1[s[i]] + 1 : 1;
            map2[t[i]] = map2[t[i]] ? map2[t[i]] + 1 : 1;
        }

        for (const ele in map1) {
            if (map1[ele] !== map2[ele]) return false;
        }

        return true;
    }
}
