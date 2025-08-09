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
const certTrack = document.querySelector('.cert-track');
let scrollAmount = 0;
let isPaused = false;

function autoScroll() {
  if (!isPaused) {
    scrollAmount += 1; // adjust speed here
    if (scrollAmount >= certTrack.scrollWidth / 2) {
      scrollAmount = 0; // loop back to start
    }
    certTrack.scrollLeft = scrollAmount;
  }
  requestAnimationFrame(autoScroll);
}

certTrack.addEventListener('mouseenter', () => {
  isPaused = true;
});

certTrack.addEventListener('mouseleave', () => {
  isPaused = false;
});

// Optional: add drag-to-scroll handlers as I shared earlier for better UX

autoScroll();
