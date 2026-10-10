class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedString = s.toLowerCase().split('').join('').replace(/[^a-z0-9]/g, "");

        let left = 0;
        let right = cleanedString.length - 1;

        while (left < right) {
            if (cleanedString.charAt(left) === cleanedString.charAt(right)){
                left ++;
                right --;
            }else{ 
                return false
            }
        }
        return true;
    }
}
