// Grabbing elements from the DOM
var navLinks = document.getElementById('nav-links');
var toggleButton = document.getElementById('menu-toggle');
// Function to toggle the menu visibility
function toggleMenu() {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
    else {
        navLinks.classList.add('show');
    }
}
// Event listener for the toggle button
toggleButton.addEventListener('click', toggleMenu);