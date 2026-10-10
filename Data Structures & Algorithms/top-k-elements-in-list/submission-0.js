class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for (const n of nums) {
            freqMap.set(n, (freqMap.get(n) || 0) + 1)
        }

        let bucket = Array.from(freqMap.entries())

        bucket.sort((a, b) => b[1] - a[1]);
        let result =[]

        for (let i = 0; i < k ; i++) {
            result.push(bucket[i][0])
        }
        return result;

    }
}
