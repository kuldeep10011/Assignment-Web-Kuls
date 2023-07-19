const btn1 = document.getElementById("decrementBtn")
const btn2 = document.getElementById("incrementBtn")
const btn3 = document.getElementById("resetBtn")
const display = document.getElementById("displayValue")

// Decrement Button
btn1.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    if (value > 0){
        displayValue.innerText = value - 1;
    } else {
        alert("Invalid Input");
    }
})


// Increment Button
btn2.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    if (value >= 10){
        alert("Invalid Input")
    } else {
        displayValue.innerText = value + 1
    }
})

// for reset button click
btn3.addEventListener("click", () => {
    displayValue.innerText = 0;
  });
