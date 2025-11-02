// Portfolio button
document.getElementById("jump-to-portfolio").addEventListener("click", () => {
    document.getElementById("recieve-jump-portfolio").scrollIntoView({ behavior: "smooth" });
});

// Dark mode switch
const applicable_bg = document.querySelectorAll(".dark-mode-bg");
const applicable_txt = document.querySelectorAll(".dark-mode-text");
const applicable_img = document.querySelectorAll(".dark-mode-img")
const toggle = document.getElementById("switch");
const knob = document.getElementById("knob");

toggle.addEventListener("click", () => {
    knob.classList.toggle("darkMode");
    applicable_bg.forEach(element => element.classList.toggle("active"));
    applicable_txt.forEach(element => element.classList.toggle("active"));

    applicable_img.forEach(element => {
        // Fades out, swaps, fades back in
        element.style.opacity = 0;
        element.src = element.src.includes("lm") ? element.src.replace("lm", "dm") : element.src.replace("dm", "lm");
        element.style.opacity = 1;
    });
});