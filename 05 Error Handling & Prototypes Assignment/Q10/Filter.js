function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
 
  const productsArray = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Watch", category: "Accessories" },
  ];
  
  const filterProductsByCategory = filterByCategory(productsArray);
  
  const electronicsProducts = filterProductsByCategory("Electronics");
  console.log(electronicsProducts);
  
  const clothingProducts = filterProductsByCategory("Clothing");
  console.log(clothingProducts);
  
  const accessoriesProducts = filterProductsByCategory("Accessories");
  console.log(accessoriesProducts);
  