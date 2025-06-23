// ======= Contact Form Submission (basic simulation) =======
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
});

// ======= Navbar Toggle =======
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// ======= Navbar Background on Scroll =======
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Animate icons on scroll into view
const faders = document.querySelectorAll('.social-icons a');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.classList.add('fade-in-up');
    appearOnScroll.observe(fader);
});

// Scroll-in animation for .fade-in elements
const serviceCards = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // remove after animation
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    observer.observe(card);
});
