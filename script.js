// menu icon 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Scroll Spy
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
// Sticky NavBar
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove menu icon navbar 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// Swiper API

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

//   dark mode 

let darkModeIcon = document.querySelector('#darkMode');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Scroll reveal 

ScrollReveal({ 
    distance: '80px',
    duration: 1000,
    delay: 100 
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});