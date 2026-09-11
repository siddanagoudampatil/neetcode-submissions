class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) {
            return false;
        }

        s1 = s1.split('').sort().join('');

        for (let i = 0; i <= s2.length - s1.length; i++) {
            let str = s2.slice(i, i + s1.length);
            str = str.split('').sort().join('');
            console.log(s1, str)
            if (s1 === str) {
                return true;
            }
        }

        return false;
    }
}
