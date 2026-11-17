
/* =====================================
   ALONGDIGITAL ADMIN ACTIVATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("adminActivationForm");

    if (!form) return;

    const email = document.getElementById("email");
    const code = document.getElementById("activationCode");
    const adminId = document.getElementById("adminId");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        // Activation code validation
        if (code.value.trim().length < 8) {
            alert("Please enter a valid activation code.");
            code.focus();
            return;
        }

        // Admin ID validation
        if (!/^[a-zA-Z0-9_]{4,20}$/.test(adminId.value.trim())) {
            alert("Admin ID must contain 4-20 letters, numbers or underscores.");
            adminId.focus();
            return;
        }

        // Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
            alert("Password must contain at least 8 characters, uppercase, lowercase and a number.");
            password.focus();
            return;
        }

        // Confirm password
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            confirmPassword.focus();
            return;
        }

        alert(
            "Frontend validation successful!\n\n" +
            "Activation and database registration require backend verification."
        );

    });

});
