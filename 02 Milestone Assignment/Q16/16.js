const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const displayRandomNumber = () => {
    const randomNumber = generateRandomNumber();
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.textContent = `Random Number: ${randomNumber}`;
};

const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', displayRandomNumber);