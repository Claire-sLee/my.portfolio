document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const nameField = document.getElementById("firstName");
    const emailField = document.getElementById("email");

    // Validate name field
    if (nameField.value.trim() === "") {
        nameField.classList.add("error");
        document.getElementById("nameError").style.display = "block";
    } else {
        nameField.classList.remove("error");
        document.getElementById("nameError").style.display = "none";
    }

    // Validate email field
    if (emailField.value.trim() === "") {
        emailField.classList.add("error");
        document.getElementById("emailError").style.display = "block";
    } else {
        emailField.classList.remove("error");
        document.getElementById("emailError").style.display = "none";
    }
});