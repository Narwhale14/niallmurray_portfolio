// Portfolio button
document.getElementById("jump-to-portfolio").addEventListener("click", () => {
    document.getElementById("recieve-jump-portfolio").scrollIntoView({ behavior: "smooth" });
});

// Bio button
document.getElementById("jump-to-bio").addEventListener("click", () => {
    document.getElementById("recieve-jump-bio").scrollIntoView({ behavior: "smooth" });
});

// Contact button
document.getElementById("jump-to-contact").addEventListener("click", () => {
    document.getElementById("recieve-jump-contact").scrollIntoView({ behavior: "smooth" });
});

// Dark mode changeable components
const applicable_bg = document.querySelectorAll(".dark-mode-bg");
const applicable_txt = document.querySelectorAll(".dark-mode-text");
const applicable_img = document.querySelectorAll(".dark-mode-img");
const applicable_pan = document.querySelectorAll(".panel");
const intro_card = document.getElementById("intro-card");
const toggle = document.getElementById("switch");
const knob = document.getElementById("knob");

// Gets user preferences
const initalMode = window.matchMedia('(prefers-color-scheme: light)').matches;
if(!initalMode) {
    applyDarkMode();
}

// Switches to dark mode
function applyDarkMode() {
    knob.classList.toggle("dark-mode");
    toggle.classList.toggle("dark-mode");
    intro_card.classList.toggle("dark-mode");
    applicable_bg.forEach(element => element.classList.toggle("active"));
    applicable_txt.forEach(element => element.classList.toggle("active"));
    applicable_pan.forEach(element => element.classList.toggle("dark-mode"));
    applicable_img.forEach(element => {
        element.src = element.src.includes("lm")
        ? element.src.replace("lm", "dm")
        : element.src.replace("dm", "lm")
    });
}

toggle.addEventListener("click", () => {
    applyDarkMode();
});