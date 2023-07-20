function capitalizeName() {
    // Get the input value
    const nameInput = document.getElementById("nameInput").value.trim();

    // Capitalize the first letter of the name
    const capitalized = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);

    // Display the capitalized name
    document.getElementById("capitalizedName").innerText = capitalized;
}