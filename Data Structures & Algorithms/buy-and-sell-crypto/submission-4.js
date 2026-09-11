class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                res = Math.max(res, prices[j] - prices[i]);
            }
        }

        return res;
    }
}
