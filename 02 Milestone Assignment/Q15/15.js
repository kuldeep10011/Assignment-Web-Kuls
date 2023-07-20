const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
};

const displayResult = () => {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountedPrice = parseFloat(document.getElementById('discountedPrice').value);

    if (isNaN(originalPrice) || isNaN(discountedPrice)) {
        alert('Please enter valid prices.');
        return;
    }

    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You are saving ${discountPercentage}%`;
};

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', displayResult);