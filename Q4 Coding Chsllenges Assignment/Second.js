function removeDuplicates(arr) {
    // Create a Set from the input array to remove duplicates
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(inputArray);
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]