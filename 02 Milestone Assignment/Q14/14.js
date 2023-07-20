// Sample cart data
const cartItems = [
    { name: 'Item 1', unitPrice: 100.00, quantity: 2 },
    { name: 'Item 2', unitPrice: 50.00, quantity: 3 },
    // Add more items to the cart if needed
];

// Function to calculate the total cost
const calculateTotalCost = (cart) => {
    let totalCost = 0;

    for (const item of cart) {
        totalCost += item.unitPrice * item.quantity;
    }

    return totalCost.toFixed(2); // This will format the total cost with 2 decimal places
};

// Function to display the cart items and total cost
const displayCart = (cart) => {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    for (const item of cart) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        const totalItemCost = (item.unitPrice * item.quantity).toFixed(2);
        itemElement.textContent = `${item.name}: ₹${totalItemCost}`; // Display item cost with Indian Rupee symbol
        cartElement.appendChild(itemElement);
    }

    const totalAmount = document.getElementById('totalAmount');
    const totalCost = calculateTotalCost(cart);
    totalAmount.textContent = `₹${totalCost}`; // Display total cost with Indian Rupee symbol
};

// Call the displayCart function with the cart data when the page loads
window.onload = () => {
    displayCart(cartItems);
};