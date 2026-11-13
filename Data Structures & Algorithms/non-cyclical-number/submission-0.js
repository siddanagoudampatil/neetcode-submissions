class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const sumOfSquares = (num) => {
            let output = 0;

            while (num > 0) {
                output += (num % 10) ** 2;
                num = Math.floor(num / 10);
            }

            return output;
        }

        const set = new Set();

        while (!set.has(n)) {
            set.add(n);
            n = sumOfSquares(n);

            if (n === 1) {
                return true;
            }
        }

        return false;
    }
}
