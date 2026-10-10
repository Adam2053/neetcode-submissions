class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashSet = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]

            if(hashSet.has(complement)){
                return [hashSet.get(complement), i]
            }
            hashSet.set(nums[i], i);
        }
        return [];
    }
}
