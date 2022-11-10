// Open/close mobile menu
let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('nav');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
}

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    nav.classList.remove('active');
}

// Home swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Reviews swiper
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});


var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});