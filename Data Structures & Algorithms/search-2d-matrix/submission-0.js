class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch (nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (nums[middle] > target) {
                right = middle - 1;
            }else if (nums[middle] < target) {
                left = middle + 1;
            }else {
                return true;
            }
        }
        return false;
    }
    
    searchMatrix(matrix, target) {
        const newMat = matrix.flat();

        return this.binarySearch(newMat, target);

    }
}
