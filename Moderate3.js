// Product of Array Except Self (Moderate):
// Given an array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].


function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n);
    let productSoFar = 1;
  
    // Calculate products of elements to the left of each element
    for (let i = 0; i < n; i++) {
      output[i] = productSoFar;
      productSoFar *= nums[i];
    }
  
    productSoFar = 1;
  
    // Calculate products of elements to the right of each element and multiply with the left product
    for (let i = n - 1; i >= 0; i--) {
      output[i] *= productSoFar;
      productSoFar *= nums[i];
    }
  
    return output;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4];
  const result = productExceptSelf(nums);
  console.log(result); // Output: [24, 12, 8, 6]
  