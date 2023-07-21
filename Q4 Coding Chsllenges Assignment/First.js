function wordCountGenerator(text) {
    // Initialize an empty object to store the word counts
    const wordCount = {};
  
    // Split the input text into words using spaces as the delimiter
    const words = text.split(/\s+/);
  
    // Iterate through each word in the array of words
    for (const word of words) {
      // Convert the word to lowercase to ensure case-insensitive counting
      const lowercaseWord = word.toLowerCase();
  
      // If the word is already in the object, increment its count by 1
      // If not, add the word to the object with a count of 1
      wordCount[lowercaseWord] = (wordCount[lowercaseWord] || 0) + 1;
    }
  
    return wordCount;
  }
  
  // Example usage:
  const inputText = "This is a sample text. The text contains some words, and the words should be counted.";
  const result = wordCountGenerator(inputText);
  console.log(result);