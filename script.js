document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Sticky header and scroll-spy
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        // Sticky header
        header.classList.toggle('sticky', window.scrollY > 100);

        // Scroll-spy
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        
        // Close mobile menu on scroll
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Dark mode toggle
    const darkModeIcon = document.querySelector('#darkMode-icon');
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    };

    // Swiper initialization for testimonials
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    // Typed.js initialization
    if (document.querySelector('.typed-text')) {
        var typed = new Typed(".typed-text", {
            strings: ["MERN Stack Developer", "Java Developer", "Frontend Developer"],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }

    // Fade-in animations on scroll using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.home-content, .home-img, .about-content, .about-img, .service-box, .portfolio-box, .testimonial-slide').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
