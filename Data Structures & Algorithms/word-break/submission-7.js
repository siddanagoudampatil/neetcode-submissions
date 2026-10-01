class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Array(s.length).fill(-1);
        const dfs = (i) => {
            if (i >= s.length) {
                return true;
            }

            if (memo[i] !== -1) {
                return memo[i];
            }

            let res = false;

            for (const word of wordDict) {
                if (i + word.length - 1 < s.length && s.slice(i, i + word.length) === word) {
                    res = res || dfs(i + word.length);
                }
            }

            return memo[i] = res;
        };

        return dfs(0);
    }
}
