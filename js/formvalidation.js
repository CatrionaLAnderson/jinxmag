// JavaScript for form validation
document.querySelector("form").addEventListener("submit", function(e) {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    // Simple email validation
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        e.preventDefault(); // Prevent the form from submitting
    }

    // Basic validation for other fields
    if (name.trim() === "") {
        alert("Please enter your name.");
        e.preventDefault();
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        e.preventDefault();
    }
});
