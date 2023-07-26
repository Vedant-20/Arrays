// Find First Missing Positive (Difficult):
// Given an unsorted integer array nums, find the smallest missing positive integer.

function firstMissingPositive(nums) {
    const n = nums.length;
  
    // Step 1: Move all positive integers to their correct positions
    for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        // Swap nums[i] to its correct position
        const temp = nums[i];
        nums[i] = nums[temp - 1];
        nums[temp - 1] = temp;
      }
    }
  
    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    // If all numbers from 1 to n are present, return n + 1
    return n + 1;
  }
  
  // Example usage:
  const nums = [3, 4, -1, 1];
  const firstMissing = firstMissingPositive(nums);
  console.log(firstMissing); // Output: 2
  