class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map1 = new Map();
        for (const c of s1) {
            map1.set(c, (map1.get(c) || 0) + 1);
        }

        const need = [...map1.keys()].length;

        for (let i = 0; i < s2.length; i++) {
            const map2 = new Map();
            let curr = 0;

            for (let j = i; j < s2.length; j++) {
                map2.set(s2[j], (map2.get(s2[j]) || 0) + 1);

                if (!map1.has(s2[j]) || (map1.get(s2[j]) < map2.get(s2[j]))) {
                    break;
                }

                if (map1.get(s2[j]) === map2.get(s2[j])) {
                    curr++;
                }

                if (curr === need) {
                    return true;
                }
            }
        }

        return false;
    }
}
