document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy user credentials for validation
    var validUsername = "admin";
    var validPassword = "1234";

    // Validation
    if (username === validUsername && password === validPassword) {
        // If login is successful, redirect to another HTML page
        window.location.href = "terms.html"; // Change this to the website or HTML page you want to connect to
    } else {
        // Display an error message if login fails
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
