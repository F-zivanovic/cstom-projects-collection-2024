// Open/close Mobile Nav
let hamburger = document.querySelector('.nav__hamburger');
let navMobile = document.querySelector('.nav__mobile');

hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    hamburger.classList.toggle('open');
});


// Close MobileNav when click on Nav Mobile Item
let navMobileItem = document.querySelectorAll('.nav__mobile li');

navMobileItem.forEach(function (item) {
    item.addEventListener('click', () => {
        navMobile.classList.add('hidden');
        hamburger.classList.remove('open');
    });
});