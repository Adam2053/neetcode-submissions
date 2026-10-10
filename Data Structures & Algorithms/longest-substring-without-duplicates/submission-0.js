class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let st = new Set();

        while (right < s.length) {
            let char = s[right];

            if (!st.has(char)){
                st.add(char);
                maxLength = Math.max(maxLength, st.size)
                right ++;   
            }else {
                st.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}
