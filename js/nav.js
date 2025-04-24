// NAV events

// Select all nav links
const navLinks = document.querySelectorAll("nav a");

// Add mouseenter and mouseleave events
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("hover-effect");
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove("hover-effect");
    });
});

//Burger menu

const toggleBtn = document.querySelector('.navbar-togglebtn');
const bmenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    bmenu.classList.toggle('active');
});