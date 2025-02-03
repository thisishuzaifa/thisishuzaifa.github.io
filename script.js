document.addEventListener('DOMContentLoaded', () => {
    const themeSwitchButton = document.getElementById('theme-switch');
    const themeIcon = themeSwitchButton.querySelector('.theme-icon');

    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon();

    themeSwitchButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('site-theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const isLightTheme = document.body.classList.contains('light-theme');
        themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
    }
});