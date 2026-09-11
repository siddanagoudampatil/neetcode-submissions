class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const isValid = (k) => {
            let time = 0;
            for (let i = 0; i < piles.length; i++) {
                time += Math.ceil(piles[i]/k);
                if (time > h) {
                    return false;
                }
            }

            console.log(time)

            return true;
        }

        const total = piles.reduce((val, prev) => prev + val);
        let k = 1;
        while (k <= total) {
            if (isValid(k)) {
                return k;
            }
            k++;
        }

        return -1;
    }
}
