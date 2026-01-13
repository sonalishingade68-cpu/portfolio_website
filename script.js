function showMessage() {
    alert("Thank you for contacting me! I will get back to you soon.");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 300;
        if (window.scrollY >= sectionTop) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/portfolio_website/service-worker.js");
}
