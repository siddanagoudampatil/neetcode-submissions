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

            return true;
        }

        const total = piles.reduce((val, prev) => prev + val);
        let l = 1, r = total;
        let k = -1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (isValid(m)) {
                k = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return k;
    }
}
