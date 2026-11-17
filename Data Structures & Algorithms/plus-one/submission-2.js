class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        for (let i = digits.length - 1; i >= 0; i--) {
            const sum = digits[i] + 1;
            digits[i] = sum % 10;
            if (Math.floor(sum / 10) === 0) {
                return digits;
            }
        }

        return [1, ...digits];
    }
}
