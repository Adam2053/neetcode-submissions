

class Solution {
    public boolean hasDuplicate(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
    // [1,2,3,1]
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);

            // {1: 2}
            // {2: 1}
            // {3: 1}

    // {1: 0} when we get this we'll get freq.get(num) = 0 i.e the value of the key. 

            if (freq.get(num) > 1) {
                return true;
            }
        }

        return false;
    }
}