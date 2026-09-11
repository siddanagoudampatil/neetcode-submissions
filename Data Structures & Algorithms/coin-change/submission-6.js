class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = {};
        const dfs = (amt) => {
            if (amt === 0) {
                return 0;
            }

            if (cache[amt]) {
                return cache[amt];
            }

            let res = Infinity;
            for (const coin of coins) {
                if (amt - coin >= 0) {
                    res = Math.min(res, 1 + dfs(amt - coin));
                }
            }

            return cache[amt] = res;
        }

        const res = dfs(amount);

        return res === Infinity ? -1 : res;
    }
}
