class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }
            return true;
        }

        const res = [];
        const temp = [];

        const dfs = (i) => {
            if (i >= s.length) {
                res.push([...temp]);
                return;
            }

            for (let j = i; j < s.length; j++) {
                if (isPalindrome(i, j)) {
                    temp.push(s.substring(i, j + 1));
                    dfs(j + 1);
                    temp.pop();
                }
            }
        }

        dfs(0);
        return res;
    }
}
