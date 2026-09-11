class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = new Map();
        const dfs = (i, amt) => {
            if (i >= coins.length || amt > amount) {
                return Infinity;
            }

            if (amt === amount) {
                return 0;
            }

            const key = `${i},${amt}`;
            if (cache.has(key)) {
                return cache.get(key);
            }

            cache.set(key, Math.min(1 + dfs(i, coins[i] + amt), dfs(i + 1, amt)));

            return cache.get(key);
        }

        const res = dfs(0, 0);

        return res === Infinity ? -1 : res;
    }
}
