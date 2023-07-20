function calculateBill() {
    const dishCost = parseFloat(document.getElementById("dishCost").value);
    const peopleCount = parseInt(document.getElementById("peopleCount").value);
  
    if (isNaN(dishCost) || isNaN(peopleCount) || dishCost < 0 || peopleCount < 1) {
      alert("Please enter valid values.");
      return;
    }
  
    const totalBill = dishCost * peopleCount;
    const billPerPerson = totalBill / peopleCount;
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <h2>Bill Summary</h2>
      <p>Total Bill: ₹${totalBill.toLocaleString("en-IN")}</p>
      <p>Bill per Person: ₹${billPerPerson.toLocaleString("en-IN")}</p>
    `;
  }