// ---------- Contact Form Validation ----------
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // ⛔ STOP submitting to server → prevents 405 error

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMessage = "";

    if (name === "") {
        errorMessage += "• Name is required.\n";
    }

    if (email === "") {
        errorMessage += "• Email is required.\n";
    } else if (!email.includes("@") || !email.includes(".")) {
        errorMessage += "• Enter a valid email address.\n";
    }

    if (message === "") {
        errorMessage += "• Message cannot be empty.\n";
    }

    if (errorMessage !== "") {
        alert("Please fix the following:\n\n" + errorMessage);
    } else {
        alert("Thank you! Your message has been received.");
    }
});
