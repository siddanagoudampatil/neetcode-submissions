class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = 0;
        let res = Infinity;

        for (const pile of piles) {
            r = Math.max(r, pile);
        }

        while (l <= r) {
            const speed = l + Math.floor((r - l) / 2);
            let totalTime = 0;
            for (const pile of piles) {
                totalTime += Math.ceil(pile / speed);
            }
            if (totalTime <= h) {
                res = Math.min(res, speed);
                r = speed - 1;
            } else {
                l = speed + 1;
            }
        }

        return res;
    }
}
