class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = 0;

        for (const digit of digits) {
            num = num * 10 + digit;
        }

        num++;

        return num.toString().split('').map(e => Number(e));
    }
}
