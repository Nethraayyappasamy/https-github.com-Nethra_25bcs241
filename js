
function showMessage() {
    document.getElementById("message").textContent =
        "Thank you for visiting my portfolio!";
}

// Create a dark-mode button
const themeButton = document.createElement("button");
themeButton.textContent = "Dark Mode";
themeButton.className = "theme-button";
document.querySelector("header").appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});
