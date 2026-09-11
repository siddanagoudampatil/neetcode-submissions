class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        let i = 0, j = 0;

        while (j < prices.length) {
            if (prices[j] < prices[i]) {
                i = j;
            } else {
                res = Math.max(res, prices[j] - prices[i]);
                j++;
            }
        }

        return res;
    }
}
