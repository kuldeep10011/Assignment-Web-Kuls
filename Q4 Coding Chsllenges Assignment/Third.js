function swapValues(x, y) {
    // Use destructuring assignment to swap the values
    [x, y] = [y, x];
  
    // Return an array with the swapped values
    return [x, y];
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  const swappedValues = swapValues(x, y);
  console.log(swappedValues); // Output: [10, 5]
  console.log(x); // Output: 10
  console.log(y); // Output: 5