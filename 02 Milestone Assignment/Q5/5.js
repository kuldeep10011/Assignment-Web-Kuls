function findHighestMarks() {
    const marksInput = document.getElementById('marksInput').value;
    const marksArray = marksInput.split(',').map(Number);
  
    if (marksArray.length !== 5) {
      alert('Please enter marks for all 5 students (comma-separated).');
      return;
    }
  
    // Using the ternary operator to find the highest marks
    const highestMarks = Math.max(...marksArray);
  
    // Displaying the result
    document.getElementById('result').textContent = `The highest marks scored: ${highestMarks}`;
  }