
/* =====================================
   ALONGDIGITAL ADMIN APPLICATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("adminApplicationForm");

    const fullName = document.getElementById("fullName");
    const studentId = document.getElementById("studentId");
    const dob = document.getElementById("dob");
    const email = document.getElementById("email");

    if (!form) return;

    // Prevent future dates of birth

    dob.max = new Date().toISOString().split("T")[0];

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = fullName.value.trim();
        const student = studentId.value.trim();
        const birthDate = dob.value;
        const emailAddress = email.value.trim();

        // Name validation

        if (!/^[a-zA-Z\s]{2,60}$/.test(name)) {
            alert("Please enter a valid full name.");
            fullName.focus();
            return;
        }

        // Student ID validation

        if (!/^\d{11}$/.test(student)) {
            alert("Please enter a valid 11-digit Student ID.");
            studentId.focus();
            return;
        }

        // DOB validation

        if (!birthDate || birthDate > dob.max) {
            alert("Please enter a valid date of birth.");
            dob.focus();
            return;
        }

        // Email validation

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        alert(
            "Application form validated successfully!\n\n" +
            "Backend integration is pending. Your application " +
            "has not been submitted yet."
        );

    });

});
