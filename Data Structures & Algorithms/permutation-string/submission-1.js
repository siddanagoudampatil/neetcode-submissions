class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const tempS1 = s1.split('').sort().join('');
        for (let i = 0; i < s2.length; i++) {
            const j = i + s1.length;

            if (j <= s2.length) {
                const tempS2 = s2.substring(i, j).split('').sort().join('');
                console.log(tempS1, tempS2);
                if (tempS2 === tempS1) return true;
            } else {
                return false;
            }
        }

        return false;
    }
}
