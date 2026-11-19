// Welcome message
console.log("Welcome to My Portfolio Website!");

// Show welcome message when website loads
window.addEventListener("load", function () {
    console.log("Portfolio loaded successfully!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
