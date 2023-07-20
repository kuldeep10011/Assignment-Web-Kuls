// Sample store inventory object with prices in USD
const storeInventory = {
    item1: 10, // USD
    item2: 20, // USD
    item3: 30, // USD
  };
  
  // Function to convert USD to INR using an exchange rate of 1 USD to 80 INR
  const convertToRupees = (priceUSD) => {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  };
  
  // Function to convert the prices in the store inventory to Indian Rupees using map higher-order function
  const convertPricesToRupees = (inventory) => {
    const convertedInventory = {};
    
    // Use the map function to iterate through the inventory object and convert the prices to INR
    Object.keys(inventory).map((item) => {
      const priceUSD = inventory[item];
      const priceINR = convertToRupees(priceUSD);
      convertedInventory[item] = priceINR;
    });
    
    return convertedInventory;
  };
  
  // Call the function and get the converted inventory
  const storeInventoryInRupees = convertPricesToRupees(storeInventory);
  
  // Output the converted inventory
  console.log(storeInventoryInRupees);