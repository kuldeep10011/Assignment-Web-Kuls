const customer = {
    name: 'Kuldeep Gogoi',
    balance: 1000.00,
};

const updateBalance = (amount) => {
    customer.balance += amount;
    displayCustomerDetails();
};

const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const amountInput = document.getElementById('amount');
const customerDetails = document.getElementById('customer');

const displayCustomerDetails = () => {
    customerDetails.textContent = `${customer.name}'s Balance: ₹${customer.balance.toFixed(2)}`;
};

const handleDeposit = () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    updateBalance(amount);
};

const handleWithdraw = () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0 || amount > customer.balance) {
        alert('You have Insufficient balance in your account to withdraw money.');
        return;
    }
    updateBalance(-amount);
};

depositBtn.addEventListener('click', handleDeposit);
withdrawBtn.addEventListener('click', handleWithdraw);

displayCustomerDetails();