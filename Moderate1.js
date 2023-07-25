// Two Sum (Moderate):
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.







function twoSum(nums, target) {
  const numToIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndexMap.has(complement)) {
      return [numToIndexMap.get(complement), i];
    }
    numToIndexMap.set(nums[i], i);
  }

  // If no two numbers sum up to the target, return an empty array or handle the case as required.
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (Because nums[0] + nums[1] equals the target 9)
