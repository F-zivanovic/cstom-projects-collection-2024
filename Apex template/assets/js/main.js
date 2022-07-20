let hamburgerIcon = document.querySelector('.nav__hamburger');
let mobileMenu = document.querySelector('.mobilemenu');
let listItems = document.querySelectorAll('.mobilemenu li');

hamburgerIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

for (listItem of listItems) {
    listItem.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// Scroll to top
let scrollBtn = document.querySelector('.scroll__top');
scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
}


window.onscroll = () => {
    showScrollBtn();
}

function showScrollBtn() {

    const sectionAnimation = document.querySelector('.about');
    const sectionPosition = sectionAnimation.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3

    const btnTop = document.querySelector('.scroll__top');

    if (sectionPosition < screenPosition) {
        btnTop.classList.add('animated');
    }
}

