// Open/Close menu
let toggle = document.getElementById('nav-toggle');
let menu = document.getElementById('nav-menu');
let close = document.getElementById('nav-close');

toggle.addEventListener('click', () => {
    menu.classList.add('show-menu');
});

close.addEventListener('click', () => {
    menu.classList.remove('show-menu');
});


// Close menu when we click on each nav__link
let navLinks = document.querySelectorAll('.nav__link');

for (let navLink of navLinks) {
    navLink.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
}