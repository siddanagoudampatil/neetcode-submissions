class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = Array(amount + 1).fill(-1);
        const dfs = (remain) => {
            if (remain === 0) {
                return 0;
            }

            if (memo[remain] !== -1) {
                return memo[remain];
            }

            let res = Infinity;
            for (const c of coins) {
                if (remain - c >= 0) {
                    res = Math.min(res, 1 + dfs(remain - c));
                }
            }

            return memo[remain] = res;
        };

        const minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins;
    }
}
