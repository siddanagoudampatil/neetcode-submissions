class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let freq1 = {};
        for (const char of t) {
            freq1[char] = (freq1[char] || 0) + 1;
        }

        const n1 = Object.keys(freq1).length;

        let minLength = Infinity;
        let l = 0;
        let matches = 0;
        let freq2 = {};
        let res = "";
        while (l < s.length && !freq1[s[l]]) {
            l++;
        }
        if (l === s.length) {
            return "";
        }

        for (let r = 0; r < s.length; r++) {
            console.log(l, r);
            freq2[s[r]] = (freq2[s[r]] || 0) + 1;
            if (freq1[s[r]] && freq2[s[r]] === freq1[s[r]]) {
                matches++;
            }

            while (matches === n1) {
                console.log("match -> ", l, r);
                if (r - l + 1 < minLength) {
                    minLength = r - l + 1;
                    res = s.substring(l, r + 1);
                    console.log(res);
                }
                freq2[s[l]]--;

                if (freq1[s[l]] && freq2[s[l]] < freq1[s[l]]) {
                    matches--;
                }
                l++;
            }
        }
        

        return res;
    }
}
