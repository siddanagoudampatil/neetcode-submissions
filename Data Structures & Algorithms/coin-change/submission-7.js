class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for (let amt = 1; amt <= amount; amt++) {
            for (const coin of coins) {
                if (amt - coin >= 0) {
                    dp[amt] = Math.min(dp[amt], 1 + dp[amt - coin]);
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
