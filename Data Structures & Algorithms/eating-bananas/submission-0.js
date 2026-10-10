class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxNumber = 0;

        for (const bananas of piles) {
            if (bananas > maxNumber) {
                maxNumber = bananas;
            }
        }
        let res = maxNumber;

        // now i know the range of k will be 1 - maxNumber
        let left = 0;
        let right = maxNumber;

        while (left <= right) {
            const k = Math.floor((left + right) / 2);
            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                right = k - 1;
            }else {
                left = k + 1;
            }
        }
        return res;
    }
}
