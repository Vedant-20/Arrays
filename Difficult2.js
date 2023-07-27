// Rotate Image (Difficult):
// You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place.


function rotate(matrix) {
    const n = matrix.length;
  
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  
    // Reverse each row
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  rotate(matrix);
  console.log(matrix);
  /* Output: 
     [
       [7, 4, 1],
       [8, 5, 2],
       [9, 6, 3]
     ]
  */
  