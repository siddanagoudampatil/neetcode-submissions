class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const sumOfSquares = (n) => {
            let output = 0;

            while (n > 0) {
                output += (n % 10) ** 2;
                n = Math.floor(n / 10);
            }

            return output;
        }

        const seen = new Set();

        while (!seen.has(n)) {
            seen.add(n);
            n = sumOfSquares(n);

            if (n === 1) {
                return true;
            }
        }

        return false;
    }
}
