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

        const temp = [];
        const res = [];

        const dfs = (i, j) => {
            if (j >= s.length) {
                if (i === j) {
                    res.push([...temp]);
                }
                return;
            }

            if (isPalindrome(i, j)) {
                temp.push(s.substring(i, j + 1));
                dfs(j + 1, j + 1);
                temp.pop();
            }

            dfs(i, j + 1);
        }

        dfs(0, 0);
        return res;
    }
}
