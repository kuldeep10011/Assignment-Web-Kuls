function countVowels() {
    const nameInput = document.getElementById("nameInput").value;
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
  
    for (let i = 0; i < nameInput.length; i++) {
      if (vowels.includes(nameInput[i])) {
        vowelCount++;
      }
    }
  
    document.getElementById("result").textContent = `Number of vowels in the name: ${vowelCount}`;
  }