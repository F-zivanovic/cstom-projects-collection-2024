// Open/Close Navigation list on smaller screen
const list = document.getElementById("list");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    list.classList.toggle('show');
});

// Close navigation list when click on item of that listStyle: 
const links = document.querySelectorAll('.nav__list a');

for (let link of links) {
    link.addEventListener('click', () => {
        list.classList.remove('show');
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

