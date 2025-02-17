document.addEventListener("DOMContentLoaded", () => {
    const themeSwitchButton = document.getElementById("theme-switch");
    const themeIcon = themeSwitchButton.querySelector(".theme-icon");

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("site-theme") || "dark";
    document.body.classList.toggle("light-theme", savedTheme === "light");
    updateThemeIcon();

    themeSwitchButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        localStorage.setItem("site-theme", currentTheme);
        updateThemeIcon();

        document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
        setTimeout(() => {
            document.body.style.transition = "";
        }, 500);
    });

    function updateThemeIcon() {
        const isLightTheme = document.body.classList.contains("light-theme");
        themeIcon.textContent = isLightTheme ? "☀️" : "🌙";
    }

    // Smooth scroll for navigation
    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
