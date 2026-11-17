
/* =====================================
   ALONGDIGITAL AUTHENTICATION
   SIGNUP PAGE JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signupForm");

    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const userId = document.getElementById("userid");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    if (!signupForm) return;


    // SHOW MESSAGE

    function showMessage(message) {
        alert(message);
    }


    // FULL NAME VALIDATION

    function validateName(value) {
        return /^[a-zA-Z\s]{2,60}$/.test(value.trim());
    }


    // EMAIL VALIDATION

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }


    // MOBILE VALIDATION

    function validateMobile(value) {
        return /^\d{10}$/.test(value);
    }


    // USER ID VALIDATION

    function validateUserId(value) {
        return /^[a-zA-Z0-9_]{4,20}$/.test(value);
    }


    // PASSWORD VALIDATION

    function validatePassword(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
    }


    // FORM SUBMISSION

    signupForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameValue = fullName.value.trim();
        const emailValue = email.value.trim();
        const mobileValue = mobile.value.trim();
        const userIdValue = userId.value.trim();
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;


        if (!validateName(nameValue)) {
            showMessage("Please enter a valid full name.");
            fullName.focus();
            return;
        }


        if (!validateEmail(emailValue)) {
            showMessage("Please enter a valid email address.");
            email.focus();
            return;
        }


        if (!validateMobile(mobileValue)) {
            showMessage("Enter a valid 10-digit mobile number.");
            mobile.focus();
            return;
        }


        if (!validateUserId(userIdValue)) {
            showMessage(
                "User ID must contain 4-20 characters. Use letters, numbers or underscores."
            );
            userId.focus();
            return;
        }


        if (!validatePassword(passwordValue)) {
            showMessage(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number."
            );
            password.focus();
            return;
        }


        if (passwordValue !== confirmValue) {
            showMessage("Passwords do not match.");
            confirmPassword.focus();
            return;
        }


        if (!terms.checked) {
            showMessage("Please accept the Terms & Conditions.");
            terms.focus();
            return;
        }


        // FRONTEND VALIDATION SUCCESS

        showMessage(
            "All validations passed! Signup backend and email OTP verification are not connected yet."
        );

    });


    // LIVE PASSWORD MATCH CHECK

    confirmPassword.addEventListener("input", () => {

        if (confirmPassword.value === "") {
            confirmPassword.setCustomValidity("");
            return;
        }

        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity(
                "Passwords do not match."
            );
        } else {
            confirmPassword.setCustomValidity("");
        }

    });


    // RESET CONFIRMATION VALIDATION WHEN PASSWORD CHANGES

    password.addEventListener("input", () => {

        if (confirmPassword.value !== "") {
            confirmPassword.setCustomValidity(
                password.value === confirmPassword.value
                    ? ""
                    : "Passwords do not match."
            );
        }

    });

});
