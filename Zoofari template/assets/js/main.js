let hamburger = document.querySelector('.nav-hamburger');
let mobileMenu = document.querySelector('.nav-mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
});

// Close hamburger menu
let links = document.querySelectorAll('.nav-mobile-menu li');

links.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('open');
    });
});




