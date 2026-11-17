class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const sumOfSquares = (n) => {
            let res = 0;

            while (n > 0) {
                res += (n % 10) ** 2;
                n = Math.floor(n / 10);
            }

            return res;
        }

        let slow = sumOfSquares(n);
        let fast = sumOfSquares(sumOfSquares(n));

        while (slow !== fast) {
            slow = sumOfSquares(slow);
            fast = sumOfSquares(sumOfSquares(fast));
        }

        return fast === 1 ? true : false;
    }
}
