const loggedIn = sessionStorage.getItem("ownerLoggedIn");

if (loggedIn !== "true") {
    window.location.href = "login.html";
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("ownerLoggedIn");
    sessionStorage.removeItem("csrfToken");

    document.cookie = "ownerSession=; path=/; max-age=0; Secure; SameSite=Strict";

    window.location.href = "login.html";
});