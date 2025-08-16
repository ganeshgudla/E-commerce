function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    }

    errorMessage.textContent = "";
    alert("Login successful");
    return true;
}
