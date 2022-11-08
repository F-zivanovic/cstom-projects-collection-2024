// Open/close mobile menu
let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('nav');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
}

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});