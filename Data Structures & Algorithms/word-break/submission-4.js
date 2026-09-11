class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(false);
        dp[n] = true;

        for (let i = n - 1; i >= 0; i--) {
            for (const word of wordDict) {
                const wl = word.length;

                if (i + wl <= n && s.substring(i, i + wl) === word) {
                    dp[i] = dp[i + wl];
                }

                if (dp[i]) {
                    break;
                }
            }
        }

        return dp[0];
    }
}
