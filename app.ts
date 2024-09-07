const navLinks = document.getElementById('nav-links') as HTMLElement;
const toggleButton = document.getElementById('menu-toggle') as HTMLButtonElement;

function toggleMenu() {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
}

toggleButton.addEventListener('click', toggleMenu);
