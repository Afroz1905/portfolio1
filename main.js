var typed = new Typed(".text", {
    strings: ["AI Student", "Full-Stack Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const hamburger = document.querySelector(".menu-icon"); // ✅ match HTML
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
});
