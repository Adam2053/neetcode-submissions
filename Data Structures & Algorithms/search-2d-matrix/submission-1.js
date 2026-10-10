class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    searchMatrix(matrix, target) {
let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let top = 0;
    let bot = ROWS - 1;

    while (top <= bot) {
        const m = Math.floor((top + bot) / 2);

        if (matrix[m][COLS - 1] < target) {
            top = m + 1;
        }else if (matrix[m][0] > target) {
            bot = m - 1;
        }else {
            break;
        }
    }
if (!(top <= bot)) {
        return false;
    }

    let l = 0;
    let r = COLS - 1;
    const row = Math.floor((top + bot) / 2);
    while (l <= r){
        const m = Math.floor((l + r) / 2);

        if(matrix[row][m] > target){
            r = m - 1;
        }else if (matrix[row][m] < target) {
            l = m + 1;
        }else {
            return true;
        }
    }
    return false;

    }
}
