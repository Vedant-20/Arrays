// Maximal Rectangle (Difficult):
// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.


function maximalRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Update the height array for the current row
        if (matrix[i][j] === '1') {
          heights[j] += 1;
        } else {
          heights[j] = 0;
        }
      }
      // Find the largest rectangle area for the current row
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
  
    return maxArea;
  }
  
  function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
  
    for (let i = 0; i <= heights.length; i++) {
      while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
  
    return maxArea;
  }
  
  // Example usage:
  const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ];
  
  const maxRectangleArea = maximalRectangle(matrix);
  console.log(maxRectangleArea); // Output: 6
  