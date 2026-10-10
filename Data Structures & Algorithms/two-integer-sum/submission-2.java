class Solution {
    public int[] twoSum(int[] nums, int target) {
        int i = 0; 
        int j = i + 1;

        while (i < nums.length) {
            if (j >= nums.length) {
                i++; 
                j = i + 1; 
                continue;
            }

            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }

            j++; 


        }

        return new int[]{-1,-1};
    }
}
