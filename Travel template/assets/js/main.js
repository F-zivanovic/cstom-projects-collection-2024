// Open/Close mobile menu
let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () =>{
    mobileMenu.classList.toggle('show');
});

// Close mobile menu when click on nav-link
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((item) => {
    item.addEventListener('click', () =>{
        mobileMenu.classList.remove('show');
    });
});
