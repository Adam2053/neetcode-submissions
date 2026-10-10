class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;
        let maxProfit = 0;

        while (right < prices.length) {
            let profit = 0;
            if (!prices) return 0;
            if (prices[left] > prices[right]) {
                left = right;
            }else {
                profit = prices[right] - prices[left]
                maxProfit = Math.max(maxProfit, profit)
            }
            right++;
        }
        return maxProfit;
    }
}
