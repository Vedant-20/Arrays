// Kth Smallest Element in a Sorted Matrix (Difficult):
// Given an n x n matrix where each row and column are sorted in ascending order, find the kth smallest element in the matrix.


function kthSmallest(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const count = countElements(matrix, mid);
  
      if (count < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  function countElements(matrix, target) {
    const n = matrix.length;
    let count = 0;
    let row = n - 1;
    let col = 0;
  
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
  ];
  const k = 8;
  const kthSmallestElement = kthSmallest(matrix, k);
  console.log(kthSmallestElement); // Output: 13
  