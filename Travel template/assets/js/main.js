// Open/Close mobile menu
let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// Close mobile menu when click on nav-link
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

// Close mobile menu when scroll
window.onscroll = () =>{
    mobileMenu.classList.remove('show');
};


// Change video in About section

let video = document.getElementById('video');
let controlBtns = document.querySelectorAll('.control-btn');

for (let btn of controlBtns) {
    btn.addEventListener('click', () => {
        let src = btn.getAttribute('data-src');
        video.src = src;
    })
}