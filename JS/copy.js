document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copyable").forEach(el => {
        el.addEventListener("click", () => {
            const text = el.innerText;
            navigator.clipboard.writeText(text);

            el.classList.remove("scale");
            void el.offsetWidth;
            el.classList.add("scale");
        });
    });
});