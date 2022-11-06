// Open/Close mobile Menu
let menuBtn = document.querySelector('.nav-icons #menu-btn');
let list = document.querySelector('nav ul');

menuBtn.addEventListener('click', function () {
    list.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
});


// Open search form 
let searchBtn = document.querySelector('.nav-icons #search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    list.classList.remove('active');
})

// Open login form 
let loginBtn = document.querySelector('.nav-icons #login-btn');
let loginForm = document.querySelector('.login-form');

loginBtn.addEventListener('click', function () {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
    list.classList.remove('active');
})

// Open info 
let infonBtn = document.querySelector('.nav-icons #info-btn');
let contactInfo = document.querySelector('.contact-info');
let close = document.querySelector('.close');

infonBtn.addEventListener('click', function () {
    contactInfo.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    list.classList.remove('active');
})

close.addEventListener('click', function () {
    contactInfo.classList.remove('active');

});


window.addEventListener('scroll', function () {
    list.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
});

// Swiper
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        280: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});