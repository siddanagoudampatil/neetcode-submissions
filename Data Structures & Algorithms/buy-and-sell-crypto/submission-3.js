class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minPrice = prices[0];

        for (const sellPrice of prices) {
            profit = Math.max(profit, sellPrice - minPrice);
            minPrice = Math.min(minPrice, sellPrice);
        }

        return profit;
    }
}
