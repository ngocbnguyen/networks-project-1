const csrfToken = crypto.randomUUID();
sessionStorage.setItem("csrfToken", csrfToken);
document.getElementById("csrfToken").value = csrfToken;

const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const submittedToken = document.getElementById("csrfToken").value;
    const storedToken = sessionStorage.getItem("csrfToken");

    if (submittedToken !== storedToken) {
        showMessage("Invalid CSRF token. Login blocked.", "danger");
        return;
    }

    if (username === "owner" && password === "project123") {
        sessionStorage.setItem("ownerLoggedIn", "true");

        document.cookie = "ownerSession=active; path=/; max-age=1800; Secure; SameSite=Strict";

        window.location.href = "owner.html";
    } else {
        showMessage("Invalid username or password.", "danger");
    }
});

function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = "alert alert-" + type;
}