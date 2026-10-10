class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

  const results = [];

  // 2. Iterate through the array with a 'for' loop.
  //    'i' will track our first number, 'a'.
  //    We stop at nums.length - 2 to leave room for 'b' and 'c'.
  for (let i = 0; i < nums.length - 2; i++) {
    
    // 3. OPTIMIZATION: If the first number (nums[i]) is already
    //    positive, we can stop. Since the array is sorted,
    //    it's impossible to find two more numbers to add up to 0.
    if (nums[i] > 0) {
      break;
    }

    // 4. DUPLICATE 'a' CHECK: If the current number is the same
    //    as the previous number, skip it. This prevents us
    //    from processing the same triplet starting with the same 'a'.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 5. Set up the two pointers, 'left' and 'right'.
    //    'left' (our 'b') starts right after 'i'.
    //    'right' (our 'c') starts at the very end of the array.
    let left = i + 1;
    let right = nums.length - 1;

    // 6. The two-pointer "squeeze".
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // We found a valid triplet!
        results.push([nums[i], nums[left], nums[right]]);

        // 7. DUPLICATE 'b' and 'c' CHECK:
        //    We must now skip over any duplicate 'b's and 'c's
        //    to avoid adding the same triplet multiple times.
        
        // Skip duplicate 'b's
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // Skip duplicate 'c's
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        // 8. Move pointers to the next *new* elements.
        left++;
        right--;
        
      } else if (sum < 0) {
        // The sum is too small. We need a larger number.
        // Move the 'left' pointer to the right.
        left++;
      } else { // sum > 0
        // The sum is too big. We need a smaller number.
        // Move the 'right' pointer to the left.
        right--;
      }
    }
  }

  return results;
            
        }


    }

