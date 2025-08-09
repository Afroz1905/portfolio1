const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle menu
menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from closing immediately
    navbar.classList.toggle('active');
});

// Close when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Close when clicking anywhere outside the menu
document.addEventListener('click', (event) => {
    if (
        navbar.classList.contains('active') &&
        !navbar.contains(event.target) &&
        event.target !== menuIcon
    ) {
        navbar.classList.remove('active');
    }
});
