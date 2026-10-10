class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const st = new Set(nums);
        let longest = 0;

        for (const n of nums) {
            if (!st.has(n-1)){
                let length = 1;
                while (st.has(n + length)) {
                    length ++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest
    }
}
