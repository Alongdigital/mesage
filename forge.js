
document.addEventListener("DOMContentLoaded", function () {

    const forgotForm = document.getElementById("forgotPasswordForm");
    const emailInput = document.getElementById("email");

    if (!forgotForm || !emailInput) {
        console.error("Forgot Password form or email field not found.");
        return;
    }

    forgotForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        // Check empty email
        if (email === "") {
            alert("Please enter your registered email address.");
            emailInput.focus();
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        // Frontend-only response
        alert(
            "Email format verified successfully!\n\n" +
            "OTP functionality will be available after backend integration."
        );

        console.log("Password reset requested for:", email);
    });

});
