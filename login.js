
/* =====================================
   ALONGDIGITAL AUTHENTICATION
   LOGIN PAGE JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    const loginId = document.getElementById("loginId");
    const loginPassword = document.getElementById("loginPassword");
    const rememberMe = document.getElementById("rememberMe");

    if (!loginForm) return;


    // SHOW MESSAGE

    function showMessage(message) {
        alert(message);
    }


    // LOGIN FORM SUBMISSION

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const userId = loginId.value.trim();
        const password = loginPassword.value;

        // CHECK USER ID

        if (userId.length < 3) {

            showMessage("Please enter a valid User ID or Email.");

            loginId.focus();

            return;
        }


        // CHECK PASSWORD

        if (password.length === 0) {

            showMessage("Please enter your password.");

            loginPassword.focus();

            return;
        }


        // REMEMBER ME STATUS

        const remember = rememberMe.checked;

        console.log("Remember Me:", remember);


        // FRONTEND VALIDATION SUCCESS

        showMessage(
            "Login form validated successfully! Authentication backend is not connected yet."
        );

    });


    // CLEAR PASSWORD WHEN USER CHANGES LOGIN ID

    loginId.addEventListener("change", () => {

        loginPassword.setCustomValidity("");

    });


    // PREVENT EMPTY SPACES AS LOGIN ID

    loginId.addEventListener("input", () => {

        loginId.setCustomValidity("");

    });

});
