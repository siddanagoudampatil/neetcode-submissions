class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(null);
        dp[n] = true;

        const dfs = (i) => {
            if (dp[i] !== null) {
                return dp[i];
            }

            for (const word of wordDict) {
                if (i + word.length <= n && s.substring(i, i + word.length) === word) {
                    if (dfs(i + word.length)) {
                        dp[i] = true;
                        return true;
                    }
                }
            }

            dp[i] = false;
            return false;
        };

        return dfs(0);
    }
}
