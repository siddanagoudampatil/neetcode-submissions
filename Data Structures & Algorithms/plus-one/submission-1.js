class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            let num = digits[i] + carry;
            digits[i] = num % 10;
            carry = Math.floor(num / 10);

            if (carry === 0) {
                break;
            }
        }

        return carry === 0 ? digits : [1, ...digits];
    }
}
