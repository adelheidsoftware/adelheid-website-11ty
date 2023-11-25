const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
const defaultTheme = prefersLightMode ? "light" : "dark";
const preferredTheme = localStorage.getItem("theme");

if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
}

document.documentElement.setAttribute('data-theme', preferredTheme || defaultTheme);
html.dataset.theme = preferredTheme || defaultTheme; // Useless?

function onThemeToggleClick() {
    // Check if the saved theme in localStorage is  "dark"
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    // Chooses the opposite theme of the current selected one
    const newTheme = isDarkTheme ? "light" : "dark";
    // Changes the theme to the newTheme
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    html.dataset.theme = newTheme; // Useless?
}