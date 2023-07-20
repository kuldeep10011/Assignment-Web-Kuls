function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }

  function displayProgress(secondsRemaining) {
    const progressElement = document.getElementById("progress");
    progressElement.textContent = `Generating random number in ${secondsRemaining} seconds...`;
  }

  function startRandomNumberGeneration() {
    const delayInSeconds = 3;

    let secondsRemaining = delayInSeconds;
    const progressInterval = setInterval(() => {
      displayProgress(secondsRemaining);
      secondsRemaining--;

      if (secondsRemaining < 0) {
        clearInterval(progressInterval);
        const randomNumber = generateRandomNumber();
        const progressElement = document.getElementById("progress");
        progressElement.textContent = ""; // Clear progress message

        const resultElement = document.getElementById("result");
        resultElement.textContent = `Generated Random Number: ${randomNumber}`;
      }
    }, 1000); // 1000 milliseconds = 1 second
  }